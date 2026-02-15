import React from "react";

function JobCard({ job }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p className="text-gray-600">
        {job.company} - {job.location}
      </p>
      <p className="text-green-600 font-medium mt-1">
        ${job.salary?.toLocaleString() ?? 'N/A'}/yr
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {Array.isArray(job.tags) && job.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs bg-gray-100 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-2">Posted {job.posted} ago</p>
    </div>
  );
}

export default JobCard;