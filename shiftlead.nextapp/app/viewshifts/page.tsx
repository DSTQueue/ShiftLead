"use client";
import React from 'react';
import Navbar from '../../public/components/Navbar';

const placeholderShifts = [
	{ day: 'Monday', start: '09:00', end: '17:00', role: 'Cashier' },
	{ day: 'Wednesday', start: '12:00', end: '20:00', role: 'Manager' },
	{ day: 'Friday', start: '08:00', end: '16:00', role: 'Stock' },
];

export default function ViewShifts() {
	return (
		<main className="flex flex-col items-center min-h-screen bg-gray-50 p-8">
			<Navbar />
			<h2 className="text-2xl font-bold mb-6">Your Shifts</h2>
			<div className="w-full max-w-2xl bg-white rounded shadow p-6">
				<table className="w-full border-collapse">
					<thead>
						<tr className="bg-gray-200">
							<th className="py-2 px-4">Day</th>
							<th className="py-2 px-4">Start</th>
							<th className="py-2 px-4">End</th>
							<th className="py-2 px-4">Role</th>
						</tr>
					</thead>
					<tbody>
						{placeholderShifts.map((shift, idx) => (
							<tr key={idx} className="bg-gray-100 hover:bg-gray-300">
								<td className="py-2 px-4 font-semibold">{shift.day}</td>
								<td className="py-2 px-4">{shift.start}</td>
								<td className="py-2 px-4">{shift.end}</td>
								<td className="py-2 px-4">{shift.role}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</main>
	);
}