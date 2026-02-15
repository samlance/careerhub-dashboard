import React from "react";
import JobCard from "./JobCard";

function JobList({ jobs }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Latest Jobs</h2>
      <div className="grid gap-4">
        {jobs.map((job) => (
          job && job.id ? <JobCard key={job.id} job={job} /> : null
        ))}
      </div>
    </div>
  );
}

export default JobList;