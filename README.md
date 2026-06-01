# PetHaven

### Purpose
### Live URL
https://my-app-omega-gray-47.vercel.app/

### Features

* **Public Search and Filter System**
The platform features a highly responsive search and filtering interface that allows users to browse all available pets without needing an account. Users can search for specific pets by name or filter the entire database by species categories such as Dogs, Cats, Birds, or Rabbits. This ensures that potential adopters can quickly find the specific type of companion they are looking for based on their personal preferences.

* **Detailed Pet Information Profiles**
Every pet listing includes a dedicated details page. This page aggregates vital information to help users make informed decisions before initiating an adoption. It displays clear status badges (Available vs. Adopted), physical attributes like breed and age, and medical history such as vaccination status. The integration of high-quality imagery combined with descriptive text ensures that the personality and background of each animal are communicated effectively.

* **Secure OAuth 2.0 Authentication**
PetHaven prioritizes user privacy and security by implementing Google OAuth integration. This authentication system allows users to create accounts and log in securely without the burden of maintaining yet another username and password. By utilizing standard industry protocols, the platform ensures that user sessions are handled reliably across both the frontend and backend services.

* **Personalized User Dashboard**
Logged-in users have access to a centralized dashboard that functions as a personal hub. This interface is categorized to help users manage their activity effectively:
    * **My Adoption Requests:** Users can track the status of applications they have submitted for pets, seeing whether they are pending, approved, or rejected.
    * **Pet Management:** For users who have listed pets for adoption, the dashboard provides the tools to manage their listings, allowing them to track how many requests they have received for each pet.

* **Integrated Adoption Request Workflow**
The system supports a formal adoption lifecycle. When a user finds a pet they wish to adopt, they can submit an adoption request directly through the pet's profile. This triggers a record in the database that the pet owner can review. The system allows for status updates, where owners can formally approve or reject applications, and keeps data synchronized so that pets are automatically marked as "Adopted" once a request is successfully finalized.

### NPM Packages Used
* express
* cors
* dotenv
* mongodb
* jose
* next
* react
* @heroui/react
* react-hot-toast
* vercel