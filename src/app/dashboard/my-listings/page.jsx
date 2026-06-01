"use client";

import { useEffect, useState } from 'react';
import { Button, Modal } from "@heroui/react";
import { Person } from "@gravity-ui/icons";
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function MyListingsPage() {
    const { data: session } = authClient.useSession();
    const [pets, setPets] = useState([]);
    const [allRequests, setAllRequests] = useState([]); // Track all requests globally
    const [selectedPet, setSelectedPet] = useState(null);
    const [requests, setRequests] = useState([]);
    const router = useRouter();

    const fetchAllData = async () => {
        if (!session?.user?.email) return;
        
        // Fetch pets
        const petRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-listings?email=${session.user.email}`);
        setPets(await petRes.json());

        // Fetch ALL requests for user's pets to populate badges
        const reqRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-pets-requests?email=${session.user.email}`);
        setAllRequests(await reqRes.json());
    };

    useEffect(() => { fetchAllData(); }, [session]);

    const openRequestsModal = async (pet) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pet-requests/${pet._id}`);
        setRequests(await res.json());
        setSelectedPet(pet);
    };

    const updateRequestStatus = async (id, status) => {
        await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adopt-request/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        });
        toast.success(`Request ${status}`);
        openRequestsModal(selectedPet); // Refresh modal
        fetchAllData(); // Refresh badges
    };

    const deletePet = async (id) => {
        await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${id}`, { method: 'DELETE' });
        toast.success("Listing deleted");
        fetchAllData();
    };

    return (
        <div className="min-h-screen bg-[#fcf8e3] py-12 px-5">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-black mb-8 text-[#1a1a1a]">My Listings</h1>

                <div className="grid grid-cols-3 gap-6 mb-10">
                    <div className="p-6 rounded-3xl bg-white border border-orange-100 text-center shadow-sm">
                        <h2 className="text-4xl font-black">{pets.length}</h2>
                        <p className="text-xs font-bold text-gray-400 uppercase">Total Listings</p>
                    </div>
                    <div className="p-6 rounded-3xl bg-white border border-orange-100 text-center shadow-sm">
                        <h2 className="text-4xl font-black">{pets.filter(p => !p.adopted).length}</h2>
                        <p className="text-xs font-bold text-gray-400 uppercase">Available</p>
                    </div>
                    <div className="p-6 rounded-3xl bg-white border border-orange-100 text-center shadow-sm">
                        <h2 className="text-4xl font-black">{pets.filter(p => p.adopted).length}</h2>
                        <p className="text-xs font-bold text-gray-400 uppercase">Adopted</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pets.map(pet => {
                        // Check status across all requests
                        const hasRejected = allRequests.some(r => r.petId === pet._id && r.status === 'rejected');
                        
                        return (
                            <div key={pet._id} className="p-4 rounded-[2rem] bg-white border border-orange-100 shadow-sm">
                                <div className="relative mb-4">
                                    <img src={pet.image} className="w-full h-48 object-cover rounded-2xl" />
                                    <span className={`absolute top-2 left-2 text-white text-xs font-bold px-3 py-1 rounded-full ${
                                        pet.adopted ? 'bg-purple-500' : hasRejected ? 'bg-red-500' : 'bg-green-500'
                                    }`}>
                                        {pet.adopted ? 'Adopted' : hasRejected ? 'Rejected' : 'Available'}
                                    </span>
                                </div>
                                <h3 className="text-xl font-black">{pet.name}</h3>
                                <p className="text-orange-500 font-bold mb-4">${pet.adoptionFee || "Free"}</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <Modal>
                                        <Button variant="secondary" size="sm" onPress={() => openRequestsModal(pet)}>Requests</Button>
                                        <Modal.Backdrop>
                                            <Modal.Container>
                                                <Modal.Dialog className="sm:max-w-[500px]">
                                                    <Modal.CloseTrigger />
                                                    <Modal.Header>
                                                        <Modal.Icon><Person /></Modal.Icon>
                                                        <Modal.Heading>Requests for {pet.name}</Modal.Heading>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        {requests.map(req => (
                                                            <div key={req._id} className="p-4 border rounded-xl flex justify-between items-center">
                                                                <div>
                                                                    <p className="font-bold">{req.userName}</p>
                                                                    <p className="text-sm text-gray-500">{req.userEmail}</p>
                                                                </div>
                                                                {req.status === 'pending' ? (
                                                                    <div className="flex gap-2">
                                                                        <button className="text-green-700 bg-green-100 px-3 py-1 rounded-lg" onClick={() => updateRequestStatus(req._id, 'approved')}>Approve</button>
                                                                        <button className="text-red-700 bg-red-100 px-3 py-1 rounded-lg" onClick={() => updateRequestStatus(req._id, 'rejected')}>Reject</button>
                                                                    </div>
                                                                ) : (
                                                                    <span className="font-bold uppercase text-xs">{req.status}</span>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </Modal.Body>
                                                </Modal.Dialog>
                                            </Modal.Container>
                                        </Modal.Backdrop>
                                    </Modal>
                                    <button className="text-sm px-3 py-2 rounded-xl bg-gray-100" onClick={() => router.push(`/dashboard/update-pet/${pet._id}`)}>Edit</button>
                                    <button className="text-sm px-3 py-2 rounded-xl bg-gray-100" onClick={() => router.push(`/all-pets/${pet._id}`)}>View</button>
                                    <button className="text-sm px-3 py-2 rounded-xl bg-red-100 text-red-600" onClick={() => deletePet(pet._id)}>Delete</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}