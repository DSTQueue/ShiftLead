"use client";
// Login to a manager or employee account
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
	const router = useRouter();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Simulate login
		// TODO: Add real authentication
		router.push('/loggedin');
	};

	return (
		<main className="flex flex-col items-center min-h-screen bg-gray-50 p-8">
			<h2 className="text-2xl font-bold mb-6">Login</h2>
			<form onSubmit={handleSubmit} className="bg-white rounded shadow p-6 w-full max-w-md flex flex-col gap-4">
				<input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border p-2 rounded" required />
				<input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="border p-2 rounded" required />
				<button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Login</button>
			</form>
		</main>
	);
}