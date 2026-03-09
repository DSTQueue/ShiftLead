"use client";
import Link from 'next/link';

export default function Navbar() {
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
