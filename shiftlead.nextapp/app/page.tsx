// Home page for ShiftLead
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-6">Welcome to ShiftLead</h1>
      <p className="mb-8 text-lg text-gray-700">Manage and view your work shifts easily.</p>
      <div className="flex gap-4">
        <Link href="/Login">
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login</button>
        </Link>
        <Link href="/signUp">
          <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">Sign Up</button>
        </Link>
        
      </div>
    </main>
  );
}
