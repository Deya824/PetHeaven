"use client";

import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from "@heroui/react";
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const AddPetPage = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  
  const { data: session } = authClient.useSession();
  const userEmail = session?.user?.email || "Loading...";

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading('Adding your pet listing...');

    const formData = new FormData(e.currentTarget);
    const petData = Object.fromEntries(formData.entries());
    
   
    petData.ownerEmail = session?.user?.email;
    petData.ownerName = session?.user?.name;
    petData.adopted = false;
    petData.createdAt = new Date();

    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/petData/${id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(petData)
    }).then(
      (response) => {
        response.json().then(
          (data) => {
            
            if (response.ok && data.acknowledged) {
              toast.success("Pet listed successfully!", { id: toastId });
              e.target.reset();
              setIsSubmitting(false); 
              router.push("/dashboard/my-listings");
            } else {
             
              toast.error("Failed to list pet. Please check your data.", { id: toastId });
              setIsSubmitting(false); 
            }
          },
          () => {
            toast.error("Failed to read server response", { id: toastId });
            setIsSubmitting(false); 
          }
        );
      },
      (error) => {
        
        toast.error(error.message || "An unexpected error occurred", { id: toastId });
        setIsSubmitting(false); 
      }
    );
  };

  return (
    <div className="p-5 max-w-4xl mx-auto bg-[#fcf8e3] min-h-screen">
      <div className="mb-8 mt-4">
        <h1 className="text-3xl font-extrabold text-[#1a1a1a]">List a Pet</h1>
        <p className="text-gray-500 mt-2 font-medium">Help a furry friend find their forever home.</p>
      </div>

      <Card className="shadow-xl border border-orange-100 rounded-3xl">
        <form onSubmit={onSubmit} className="p-8 md:p-10 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="md:col-span-2">
              <TextField name="name" isRequired>
                <Label className="font-bold text-[#1a1a1a]">Pet Name</Label>
                <Input placeholder="e.g. Bella" className="rounded-2xl bg-gray-50 border-gray-200" />
                <FieldError />
              </TextField>
            </div>

            <div>
              <Select name="species" isRequired className="w-full" placeholder="Select Species">
                <Label className="font-bold text-[#1a1a1a]">Species</Label>
                <Select.Trigger className="rounded-2xl bg-gray-50 border-gray-200">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Dog" textValue="Dog">Dog<ListBox.ItemIndicator /></ListBox.Item>
                    <ListBox.Item id="Cat" textValue="Cat">Cat<ListBox.ItemIndicator /></ListBox.Item>
                    <ListBox.Item id="Bird" textValue="Bird">Bird<ListBox.ItemIndicator /></ListBox.Item>
                    <ListBox.Item id="Rabbit" textValue="Rabbit">Rabbit<ListBox.ItemIndicator /></ListBox.Item>
                    <ListBox.Item id="Other" textValue="Other">Other<ListBox.ItemIndicator /></ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <TextField name="breed" isRequired>
              <Label className="font-bold text-[#1a1a1a]">Breed</Label>
              <Input placeholder="e.g. Golden Retriever" className="rounded-2xl bg-gray-50 border-gray-200" />
              <FieldError />
            </TextField>

            <TextField name="age" isRequired>
              <Label className="font-bold text-[#1a1a1a]">Age</Label>
              <Input placeholder="e.g. 2 Months" className="rounded-2xl bg-gray-50 border-gray-200" />
              <FieldError />
            </TextField>

            <div>
              <Select name="gender" isRequired className="w-full" placeholder="Select Gender">
                <Label className="font-bold text-[#1a1a1a]">Gender</Label>
                <Select.Trigger className="rounded-2xl bg-gray-50 border-gray-200">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Male" textValue="Male">Male<ListBox.ItemIndicator /></ListBox.Item>
                    <ListBox.Item id="Female" textValue="Female">Female<ListBox.ItemIndicator /></ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <div>
              <Select name="healthStatus" isRequired className="w-full" placeholder="Select Status">
                <Label className="font-bold text-[#1a1a1a]">Health Status</Label>
                <Select.Trigger className="rounded-2xl bg-gray-50 border-gray-200">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Healthy" textValue="Healthy">Healthy<ListBox.ItemIndicator /></ListBox.Item>
                    <ListBox.Item id="Needs Medical Attention" textValue="Needs Medical Attention">Needs Medical Attention<ListBox.ItemIndicator /></ListBox.Item>
                    <ListBox.Item id="Special Needs" textValue="Special Needs">Special Needs<ListBox.ItemIndicator /></ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <div>
              <Select name="vaccinationStatus" isRequired className="w-full" placeholder="Select Status">
                <Label className="font-bold text-[#1a1a1a]">Vaccination Status</Label>
                <Select.Trigger className="rounded-2xl bg-gray-50 border-gray-200">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Fully Vaccinated" textValue="Fully Vaccinated">Fully Vaccinated<ListBox.ItemIndicator /></ListBox.Item>
                    <ListBox.Item id="Partially Vaccinated" textValue="Partially Vaccinated">Partially Vaccinated<ListBox.ItemIndicator /></ListBox.Item>
                    <ListBox.Item id="Not Vaccinated" textValue="Not Vaccinated">Not Vaccinated<ListBox.ItemIndicator /></ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            <TextField name="adoptionFee" type="number" isRequired>
              <Label className="font-bold text-[#1a1a1a]">Adoption Fee ($)</Label>
              <Input type="number" placeholder="0 for free" className="rounded-2xl bg-gray-50 border-gray-200" />
              <FieldError />
            </TextField>

            <TextField name="location" isRequired>
              <Label className="font-bold text-[#1a1a1a]">Location</Label>
              <Input placeholder="e.g. Rajshahi, Bangladesh" className="rounded-2xl bg-gray-50 border-gray-200" />
              <FieldError />
            </TextField>

            <div className="md:col-span-2">
              <TextField name="image" isRequired>
                <Label className="font-bold text-[#1a1a1a]">Image URL</Label>
                <Input type="url" placeholder="https://i.postimg.cc/..." className="rounded-2xl bg-gray-50 border-gray-200" />
                <FieldError />
              </TextField>
            </div>

            {/* Read Only Email */}
            <div className="md:col-span-2">
              <TextField name="displayEmail" isReadOnly>
                <Label className="font-bold text-[#1a1a1a]">Owner Email (Read Only)</Label>
                <Input value={userEmail} readOnly className="rounded-2xl bg-[#fcf8e3] text-gray-500 cursor-not-allowed border-orange-100" />
              </TextField>
            </div>

            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label className="font-bold text-[#1a1a1a]">Detailed Description</Label>
                <TextArea
                  placeholder="Tell us about the pet's personality, habits, and ideal home..."
                  className="rounded-3xl bg-gray-50 border-gray-200"
                  rows={4}
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          <Button
            type="submit"
            isDisabled={isSubmitting || !session?.user}
            className="w-full py-6 mt-4 bg-[#f97316] hover:bg-orange-600 text-white font-extrabold rounded-2xl shadow-md transition-transform transform hover:-translate-y-1 text-lg tracking-wide disabled:opacity-50 disabled:transform-none"
          >
            {isSubmitting ? "Submitting..." : "Add Pet"}
          </Button>

        </form>
      </Card>
    </div>
  );
};

export default AddPetPage;