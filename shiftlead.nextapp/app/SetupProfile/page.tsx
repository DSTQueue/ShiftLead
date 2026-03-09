"use client";
import React, { useState } from 'react';
import { Button } from '../../public/components/FormElements';
import Link from 'next/link';
function Navbar() {
  return (
    <nav className="w-full bg-white shadow mb-8 py-4 px-8 flex justify-between items-center">
      <span className="font-bold text-xl text-blue-700">ShiftLead</span>
      <div className="flex gap-6">
        <Link href="/viewshifts" className="text-blue-600 hover:underline">View Shifts</Link>
        <Link href="/SetupProfile" className="text-green-600 hover:underline">Setup Profile</Link>
        <Link href="/manageProfile" className="text-gray-600 hover:underline">Manage Profile</Link>
        <Link href="/Login" className="text-red-600 hover:underline">Logout</Link>
      </div>
    </nav>
  );
}

const AVAILABILITY_TYPES = [
  { label: 'Preferred', color: 'bg-green-500' },
  { label: 'Neutral', color: 'bg-yellow-400' },
  { label: 'Unpreferred', color: 'bg-orange-400' },
  { label: 'Unavailable', color: 'bg-gray-400' },
];

export default function SetupProfile() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  // 24 slots per day, each slot is a number 0-3 (availability type)
  const [availability, setAvailability] = useState(() => Object.fromEntries(days.map(day => [day, Array(24).fill(3)]))); // default Unavailable
  const [name, setName] = useState('');
  const [selectedType, setSelectedType] = useState(0); // Preferred by default

  const handleSlotClick = (day: string, idx: number) => {
    setAvailability(prev => ({
      ...prev,
      [day]: prev[day].map((v, i) => (i === idx ? selectedType : v)),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Send to backend
    alert('Profile saved!');
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50 p-8">
      <Navbar />
      <h2 className="text-2xl font-bold mb-6">Setup Profile</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded shadow p-6 w-full max-w-2xl flex flex-col gap-4">
        <div className="flex gap-4 mb-4">
          {AVAILABILITY_TYPES.map((type, idx) => (
            <Button
              key={type.label}
              type="button"
              style={{ backgroundColor: undefined }}
              className={`px-4 py-2 rounded text-white ${type.color} ${selectedType === idx ? 'ring-2 ring-blue-500' : ''}`}
              onClick={() => setSelectedType(idx)}
            >
              {type.label}
            </Button>
          ))}
        </div>
        <div className="overflow-x-auto">
          {days.map(day => (
            <div key={day} className="mb-2">
              <span className="font-semibold mr-2">{day}</span>
              <div className="inline-flex items-end">
                {availability[day].map((typeIdx, idx) => (
                  <div key={idx} className="flex flex-col items-center mx-0.5">
                    <div
                      onClick={() => handleSlotClick(day, idx)}
                      className={`w-6 h-6 rounded cursor-pointer border border-gray-300 ${AVAILABILITY_TYPES[typeIdx].color}`}
                      title={AVAILABILITY_TYPES[typeIdx].label}
                    />
                    <span className="text-xs text-gray-700 mt-1">{idx + 1}:00</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Button type="submit">Save Profile</Button>
      </form>
      <div className="mt-8 w-full max-w-2xl">
        <h3 className="text-xl font-semibold mb-4">Availability Summary</h3>
        <ul className="list-disc pl-6">
          {days.map(day => (
            <li key={day}>
              {day}: {availability[day].filter(t => t === 0).length} Preferred, {availability[day].filter(t => t === 1).length} Neutral, {availability[day].filter(t => t === 2).length} Unpreferred, {availability[day].filter(t => t === 3).length} Unavailable
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
