
import React from 'react';

const Dashboard = () => {
  return (
    <div className="font-sans p-6">
      {/* Header Section */}
      <header className="flex justify-between bg-gray-100 p-4 border-b border-gray-300">
        <div className="font-bold text-xl">Logo</div>
        <nav className="flex gap-4">
          <a href="/" className="text-blue-600 hover:underline">Home</a>
          <a href="/employees" className="text-blue-600 hover:underline">Employee List</a>
          <span className="text-gray-800">Hukum Gupta</span>
          <a href="/logout" className="text-red-600 hover:underline">Logout</a>
        </nav>
      </header>

      {/* Welcome Panel */}
      <main className="mt-6 text-center">
        <h2 className="text-2xl font-semibold">Welcome Admin Panel</h2>
      </main>
    </div>
  );
};

export default Dashboard;






