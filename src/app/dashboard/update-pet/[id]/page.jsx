"use client";

import React, { useState, useEffect } from 'react';
import { FieldError, Input, Label, TextField, Select, ListBox, ListBoxItem, TextArea, Button, Card, SelectTrigger, SelectValue, SelectIndicator, SelectPopover } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const UpdatePetPage = ({ params }) => {
  const { id } = React.use(params);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pet, setPet] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/petData/${id}`)
      .then(res => res.json())
      .then(data => setPet(data));
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = toast.loading('Updating pet listing...');

    const formData = new FormData(e.currentTarget);
    const updatedData = Object.fromEntries(formData.entries());

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/petData/${id}`, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(updatedData)
    });

    if (res.ok) {
      toast.success("Pet updated successfully!", { id: toastId });
      router.push("/dashboard/my-listings");
    } else {
      toast.error("Failed to update pet.", { id: toastId });
      setIsSubmitting(false);
    }
  };

  if (!pet) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="p-5 max-w-4xl mx-auto bg-[#fcf8e3] min-h-screen">
      <h1 className="text-3xl font-extrabold text-[#1a1a1a] mb-8">Update Pet Listing</h1>

      <Card className="shadow-xl border border-orange-100 rounded-3xl">
        <form onSubmit={onSubmit} className="p-8 md:p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2">
              <TextField name="name" defaultValue={pet.name} isRequired>
                <Label className="font-bold text-[#1a1a1a]">Pet Name</Label>
                <Input className="rounded-2xl bg-gray-50 border-gray-200" />
              </TextField>
            </div>

            <Select name="species" defaultSelectedKey={pet.species} isRequired className="w-full" label="Species">
              <SelectTrigger className="rounded-2xl bg-gray-50 border-gray-200">
                <SelectValue />
                <SelectIndicator />
              </SelectTrigger>
              <SelectPopover>
                <ListBox>
                  <ListBoxItem id="Dog" textValue="Dog">Dog</ListBoxItem>
                  <ListBoxItem id="Cat" textValue="Cat">Cat</ListBoxItem>
                  <ListBoxItem id="Bird" textValue="Bird">Bird</ListBoxItem>
                  <ListBoxItem id="Rabbit" textValue="Rabbit">Rabbit</ListBoxItem>
                  <ListBoxItem id="Other" textValue="Other">Other</ListBoxItem>
                </ListBox>
              </SelectPopover>
            </Select>

            <TextField name="breed" defaultValue={pet.breed} isRequired>
              <Label className="font-bold text-[#1a1a1a]">Breed</Label>
              <Input className="rounded-2xl bg-gray-50 border-gray-200" />
            </TextField>

            <TextField name="age" defaultValue={pet.age} isRequired>
              <Label className="font-bold text-[#1a1a1a]">Age</Label>
              <Input className="rounded-2xl bg-gray-50 border-gray-200" />
            </TextField>

            <Select name="gender" defaultSelectedKey={pet.gender} isRequired className="w-full" label="Gender">
              <SelectTrigger className="rounded-2xl bg-gray-50 border-gray-200">
                <SelectValue />
                <SelectIndicator />
              </SelectTrigger>
              <SelectPopover>
                <ListBox>
                  <ListBoxItem id="Male" textValue="Male">Male</ListBoxItem>
                  <ListBoxItem id="Female" textValue="Female">Female</ListBoxItem>
                </ListBox>
              </SelectPopover>
            </Select>

            <Select name="healthStatus" defaultSelectedKey={pet.healthStatus} isRequired className="w-full" label="Health Status">
              <SelectTrigger className="rounded-2xl bg-gray-50 border-gray-200">
                <SelectValue />
                <SelectIndicator />
              </SelectTrigger>
              <SelectPopover>
                <ListBox>
                  <ListBoxItem id="Healthy" textValue="Healthy">Healthy</ListBoxItem>
                  <ListBoxItem id="Needs Medical Attention" textValue="Needs Medical Attention">Needs Medical Attention</ListBoxItem>
                  <ListBoxItem id="Special Needs" textValue="Special Needs">Special Needs</ListBoxItem>
                </ListBox>
              </SelectPopover>
            </Select>

            <Select name="vaccinationStatus" defaultSelectedKey={pet.vaccinationStatus} isRequired className="w-full" label="Vaccination Status">
              <SelectTrigger className="rounded-2xl bg-gray-50 border-gray-200">
                <SelectValue />
                <SelectIndicator />
              </SelectTrigger>
              <SelectPopover>
                <ListBox>
                  <ListBoxItem id="Fully Vaccinated" textValue="Fully Vaccinated">Fully Vaccinated</ListBoxItem>
                  <ListBoxItem id="Partially Vaccinated" textValue="Partially Vaccinated">Partially Vaccinated</ListBoxItem>
                  <ListBoxItem id="Not Vaccinated" textValue="Not Vaccinated">Not Vaccinated</ListBoxItem>
                </ListBox>
              </SelectPopover>
            </Select>

            <TextField name="adoptionFee" type="number" defaultValue={pet.adoptionFee} isRequired>
              <Label className="font-bold text-[#1a1a1a]">Adoption Fee ($)</Label>
              <Input type="number" className="rounded-2xl bg-gray-50 border-gray-200" />
            </TextField>

            <TextField name="location" defaultValue={pet.location} isRequired>
              <Label className="font-bold text-[#1a1a1a]">Location</Label>
              <Input className="rounded-2xl bg-gray-50 border-gray-200" />
            </TextField>

            <div className="md:col-span-2">
              <TextField name="image" defaultValue={pet.image} isRequired>
                <Label className="font-bold text-[#1a1a1a]">Image URL</Label>
                <Input type="url" className="rounded-2xl bg-gray-50 border-gray-200" />
              </TextField>
            </div>

            <div className="md:col-span-2">
              <TextField name="description" defaultValue={pet.description} isRequired>
                <Label className="font-bold text-[#1a1a1a]">Detailed Description</Label>
                <TextArea defaultValue={pet.description} className="rounded-3xl bg-gray-50 border-gray-200" rows={4} />
              </TextField>
            </div>
          </div>

          <Button type="submit" isDisabled={isSubmitting} className="w-full py-6 bg-[#f97316] text-white font-extrabold rounded-2xl">
            {isSubmitting ? "Updating..." : "Update Pet"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default UpdatePetPage;