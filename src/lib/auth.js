import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");

import { betterAuth } from "better-auth";
import { jwt } from "better-auth/plugins";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGO_URI);
await client.connect();
const db = client.db("PetU");

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  emailAndPassword: { 
    enabled: true, 
  },
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_ID ,
            clientSecret: process.env.GOOGLE_SECRET 
        }},
        session : {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      //max 7days
      maxAge: 7 * 24 * 60 * 60
    }
  },
  plugins: [
    jwt()
  ]
});