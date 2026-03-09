// Logged-in homepage for ShiftLead
// Usability: After login, user can choose to view shifts or setup profile
import Navbar from '../../public/components/Navbar';

export default function LoggedInPage() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50">
      <Navbar />
      <section className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-3xl font-bold mb-6">Welcome!</h1>
        <p className="mb-8 text-lg text-gray-700">Choose an action below:</p>
        <div className="flex gap-4">
          <a href="/viewshifts">
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">View Shifts</button>
          </a>
          <a href="/SetupProfile">
            <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">Setup Profile</button>
          </a>
        </div>
      </section>
    </main>
  );
}
