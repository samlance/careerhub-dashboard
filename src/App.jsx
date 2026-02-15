import React from "react";
import jobsData from "./data/jobs.json";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import JobList from "./components/JobList";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 space-y-8">
        <Dashboard jobs={jobsData} />
        <JobList jobs={jobsData} />
      </main>
    </div>
  );
}

export default App;