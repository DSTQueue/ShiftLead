
"use client";
import React, { useState } from 'react';
import Navbar from '../../public/components/Navbar';

const placeholderShifts = [
	{ day: 'Monday', start: '09:00', end: '17:00', employee: 'Alice', favorability: 8 },
	{ day: 'Wednesday', start: '12:00', end: '20:00', employee: 'Bob', favorability: 6 },
	{ day: 'Friday', start: '08:00', end: '16:00', employee: 'Charlie', favorability: 9 },
];

export default function ManageShifts() {
    <Navbar />
	const [minEmployees, setMinEmployees] = useState<number>(1);
	const [favorability, setFavorability] = useState<Record<string, number>>({ Alice: 8, Bob: 6, Charlie: 9 });

	return (
		<main className="flex flex-col items-center min-h-screen bg-gray-50 p-8">
			<h2 className="text-2xl font-bold mb-6">Manage Shifts</h2>
			<form className="bg-white rounded shadow p-6 w-full max-w-md flex flex-col gap-4 mb-8">
				<label className="font-semibold">Minimum Employees per Shift:</label>
				<input type="number" min={1} value={minEmployees} onChange={e => setMinEmployees(Number(e.target.value))} className="border p-2 rounded" />
				<label className="font-semibold">Employee Favorability:</label>
				{Object.keys(favorability).map(emp => (
					<div key={emp} className="flex gap-2 items-center">
						<span>{emp}</span>
						<input type="number" min={1} max={10} value={favorability[emp]} onChange={e => setFavorability(prev => ({ ...prev, [emp]: Number(e.target.value) }))} className="border p-2 rounded w-20" />
					</div>
				))}
				<button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Update Parameters</button>
			</form>
			<div className="w-full max-w-2xl bg-white rounded shadow p-6">
				<table className="w-full border-collapse">
					<thead>
						<tr className="bg-gray-200">
							<th className="py-2 px-4">Day</th>
							<th className="py-2 px-4">Start</th>
							<th className="py-2 px-4">End</th>
							<th className="py-2 px-4">Employee</th>
							<th className="py-2 px-4">Favorability</th>
						</tr>
					</thead>
					<tbody>
						{placeholderShifts.map((shift, idx) => (
							<tr key={idx} className="bg-gray-100 hover:bg-gray-300">
								<td className="py-2 px-4 font-semibold">{shift.day}</td>
								<td className="py-2 px-4">{shift.start}</td>
								<td className="py-2 px-4">{shift.end}</td>
								<td className="py-2 px-4">{shift.employee}</td>
								<td className="py-2 px-4">{shift.favorability}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</main>
	);
}