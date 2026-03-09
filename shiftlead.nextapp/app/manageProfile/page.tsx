"use client";
// Manage profile page for ShiftLead
// Usability: Allow users to update their name, email, password, and view/change their availability
import React, { useState, ChangeEvent } from 'react';
import Navbar from '../../public/components/Navbar';
import { TextInput, Button } from '../../public/components/FormElements';

export default function ManageProfile() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('');
    try {
      const res = await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus('Profile updated successfully!');
      } else {
        setStatus('Failed to update profile.');
      }
    } catch {
      setStatus('Error updating profile.');
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 p-8">
      <Navbar />
      <h2 className="text-2xl font-bold mb-6">Manage Profile</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded shadow p-6 w-full max-w-md flex flex-col gap-4">
        <TextInput label="Name" value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} type="text" />
        <TextInput label="Email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} type="email" />
        <TextInput label="New Password" value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} type="password" />
        <Button type="submit">Update Profile</Button>
        {status && <div className="mt-2 text-sm text-green-600">{status}</div>}
      </form>
      <div className="mt-8 w-full max-w-2xl">
        <h3 className="text-xl font-semibold mb-4">Availability</h3>
        <p className="text-gray-600 mb-2">To update your availability, go to <a href="/SetupProfile" className="text-blue-600 underline">Setup Profile</a>.</p>
      </div>
    </main>
  );
}
