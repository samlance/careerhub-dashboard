import React from "react";

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
      <h2 className="text-2xl font-bold text-green-600 mb-6">CareerHUB</h2>
      <nav className="space-y-4">
        <a href="#" className="block text-gray-700">Dashboard</a>
        <a href="#" className="block text-gray-700">Jobs</a>
        <a href="#" className="block text-gray-700">Recruiters</a>
        <a href="#" className="block text-gray-700">Posts</a>
        <a href="#" className="block text-gray-700">Settings</a>
      </nav>
    </aside>
  );
}

export default Sidebar;