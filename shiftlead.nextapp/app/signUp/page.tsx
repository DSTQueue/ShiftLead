"use client";
// Create a manager or employee account.
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import Navbar from '../../public/components/Navbar';
import { TextInput, SelectInput, Button } from '../../public/components/FormElements';

export default function SignUp() {
	const [role, setRole] = useState('employee');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Simulate account creation
		// TODO: Add real backend call
		router.push('/loggedin');
	};
	return (
		<main className="flex flex-col items-center min-h-screen bg-gray-50 p-8">
			<h2 className="text-2xl font-bold mb-6">Sign Up</h2>
			<form onSubmit={handleSubmit} className="bg-white rounded shadow p-6 w-full max-w-md flex flex-col gap-4">
				<TextInput label="Full Name" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} type="text" required />
				<TextInput label="Email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} type="email" required />
				<TextInput label="Password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} type="password" required />
				<SelectInput label="Role" value={role} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRole(e.target.value)} options={[{ value: 'employee', label: 'Employee' }, { value: 'manager', label: 'Manager' }]} />
				<Button type="submit">Create Account</Button>
			</form>
		</main>
	);
}