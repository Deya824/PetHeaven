"use client";

import { useState } from 'react';
import { Card, Button, Input, TextArea } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation'; // Added for routing

export default function AdoptionForm({ pet }) {
    const { data: session } = authClient.useSession();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false); // NEW: Track submission state
const [pickupDate, setPickupDate] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const requestData = {
            ...Object.fromEntries(formData),
            petName: pet.name,
            petId: pet._id,
            userEmail: session?.user?.email,
            userName: session?.user?.name,
            status: "pending",
            createdAt: new Date().toISOString(),
             pickupDate: pickupDate,
        };

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adopt-request`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        });

        if (res.ok) {
            toast.success("Adoption request submitted!");
            setIsSubmitted(true); // Switch to the "Success" UI
        } else {
            toast.error("Failed to send request");
        }
        setIsSubmitting(false);
    };

    // UI: Show Success Message instead of Form
    if (isSubmitted) {
        return (
            <Card className="p-8 rounded-[2rem] shadow-xl border border-orange-100 bg-[#1a1a1a] text-white sticky top-24 h-fit">
                <div className="text-center py-6">
                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
                    <h2 className="text-2xl font-black mb-2">Request Submitted!</h2>
                    <p className="text-gray-400 mb-6">
                        Your adoption request for <strong>{pet.name}</strong> has been sent to the owner. You can track its status in My Requests.
                    </p>
                    <Button 
                        onClick={() => router.push("/dashboard/my-request")} 
                        className="bg-transparent border border-gray-600 text-white font-bold w-full rounded-2xl"
                    >
                        View My Requests
                    </Button>
                </div>
            </Card>
        );
    }

    // UI: The original form
    return (
        <Card className="p-8 rounded-[2rem] shadow-xl border border-orange-100 bg-white sticky top-24 h-fit">
            <h2 className="text-2xl font-black mb-6">Adopt {pet.name}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input label="Pet Name" value={pet.name} isReadOnly className="bg-gray-50" />
                <Input label="User Name" value={session?.user?.name || ""} isReadOnly className="bg-gray-50" />
                <Input label="User Email" value={session?.user?.email || ""} isReadOnly className="bg-gray-50" />
                
                <Input 
    name="pickupDate" 
    type="date" 
    label="Preferred Pickup Date" 
    isRequired 
    value={pickupDate}
    onChange={(e) => setPickupDate(e.target.value)}
/>
                <TextArea name="message" label="Message for Owner" placeholder="Share why you'd love to adopt..." isRequired />

                <Button type="submit" isLoading={isSubmitting} className="w-full bg-[#f97316] text-white font-black py-7 rounded-2xl">
                    Adopt Now
                </Button>
            </form>
        </Card>
    );
}