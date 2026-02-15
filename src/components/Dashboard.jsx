import React from "react";

function Dashboard({ jobs }) {
  const totalJobs = jobs.length;
  const totalRecruiters = 11;
  const totalLocations = new Set(jobs.map((j) => j.location)).size;
  const totalUsers = 29;

  const cards = [
    { label: "Total Jobs", value: totalJobs, change: "+0.5%" },
    { label: "Total Recruiters", value: totalRecruiters, change: "+0.5%" },
    { label: "Total Locations", value: totalLocations, change: "+4.3%" },
    { label: "Total Users", value: totalUsers, change: "+3.6%" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div key={index} className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-gray-600 text-sm">{card.label}</h3>
          <p className="text-xl font-semibold">{card.value}</p>
          <p className="text-green-500 text-sm">{card.change} from last month</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;