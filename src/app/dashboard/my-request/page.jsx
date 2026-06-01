"use client";

import { useEffect, useState } from 'react';
import { Button, Card } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function MyRequestPage() {
  const { data: session, isPending } = authClient.useSession();
  const [requests, setRequests] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login");
    }
  }, [isPending, session, router]);

  useEffect(() => {
    if (session?.user?.email) {
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-requests?email=${session.user.email}`)
        .then(res => res.json())
        .then(data => setRequests(data))
        .catch(err => console.error("Fetch error:", err));
    }
  }, [session]);

  if (isPending) return <div className="min-h-screen bg-[#fcf8e3] flex items-center justify-center font-bold text-xl">Loading...</div>;
  if (!session?.user) return null;

  const handleCancel = async (id) => {
         const {data:tokenData}= await authClient.token();
         
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adopt-request/${id}`, {
      method: 'DELETE',
      headers: { 'authorization': `Bearer ${tokenData?.token}` }
    });
    if (res.ok) {
      toast.success("Request cancelled successfully");
      setRequests(requests.filter(r => r._id !== id));
    } else {
      toast.error("Failed to cancel request");
    }
  };

  const total = requests.length;
  const pending = requests.filter(r => r.status === 'pending').length;
  const approved = requests.filter(r => r.status === 'approved').length;
  const rejected = requests.filter(r => r.status === 'rejected').length;

  return (
    <div className="min-h-screen bg-[#fcf8e3] py-12 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-[#1a1a1a]">My Adoption Requests</h1>
          <p className="text-gray-500 font-medium mt-1">Track the status of all your adoption requests here.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-3xl p-6 shadow-md border border-orange-100 text-center">
            <p className="text-3xl font-extrabold text-[#1a1a1a]">{total}</p>
            <p className="text-gray-400 font-bold text-sm mt-1">Total</p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-md border border-orange-100 text-center">
            <p className="text-3xl font-extrabold text-yellow-500">{pending}</p>
            <p className="text-gray-400 font-bold text-sm mt-1">Pending</p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-md border border-orange-100 text-center">
            <p className="text-3xl font-extrabold text-green-500">{approved}</p>
            <p className="text-gray-400 font-bold text-sm mt-1">Approved</p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-md border border-orange-100 text-center">
            <p className="text-3xl font-extrabold text-red-500">{rejected}</p>
            <p className="text-gray-400 font-bold text-sm mt-1">Rejected</p>
          </div>
        </div>

        {/* Table */}
        {requests.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-md border border-orange-100">
            <p className="text-xl font-bold text-gray-500">You have no adoption requests yet.</p>
            <button
              onClick={() => router.push("/all-pets")}
              className="mt-4 inline-block bg-[#f97316] text-white font-bold px-6 py-3 rounded-2xl"
            >
              Browse Pets
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-md border border-orange-100 overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="p-5 text-gray-400 font-bold text-sm">Pet Name</th>
                  <th className="p-5 text-gray-400 font-bold text-sm">Request Date</th>
                  <th className="p-5 text-gray-400 font-bold text-sm">Pickup Date</th>
                  <th className="p-5 text-gray-400 font-bold text-sm">Status</th>
                  <th className="p-5 text-gray-400 font-bold text-sm">Actions</th>
                </tr>
              </thead>
             <tbody>
  {requests.map(req => (
    <tr key={req._id} className="border-b border-gray-50 hover:bg-[#fcf8e3] transition-colors">
      <td className="p-5 font-extrabold text-[#1a1a1a]">{req.petName}</td>
      
      {/* Request Date: Using your existing locale format */}
      <td className="p-5 font-bold text-gray-500 text-sm">
        {req.createdAt ? new Date(req.createdAt).toLocaleDateString() : 'N/A'}
      </td>
      
      {/* Pickup Date: Ensuring it displays clean if it's a date string */}
      <td className="p-5 font-bold text-gray-500 text-sm">
        {req.pickupDate ? new Date(req.pickupDate).toLocaleDateString() : 'N/A'}
      </td>
      
      <td className="p-5">
        <span className={`px-3 py-1 rounded-full text-xs font-black capitalize ${
          req.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
          req.status === 'approved' ? 'bg-green-100 text-green-700' :
          'bg-red-100 text-red-700'
        }`}>
          {req.status}
        </span>
      </td>
      
      <td className="p-5">
        <div className="flex gap-2">
          <button
            onClick={() => router.push(`/all-pets/${req.petId}`)}
            className="px-4 py-2 bg-[#fcf8e3] text-[#f97316] font-bold rounded-xl border border-orange-100 hover:bg-orange-50 transition-colors text-sm"
          >
            View
          </button>
          <button
            onClick={() => handleCancel(req._id)}
            className="px-4 py-2 bg-red-50 text-red-600 font-bold rounded-xl border border-red-100 hover:bg-red-100 transition-colors text-sm"
          >
            Cancel
          </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}