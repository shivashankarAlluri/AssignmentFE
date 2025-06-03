import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobPostings = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3000/jobs') 
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch jobs:', err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Job Postings</h2>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="animate-pulse bg-gray-100 border p-4 rounded shadow"
            >
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      ) : jobs.length === 0 ? (
        <p className="text-gray-600">No companies are hiring now.</p>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="border rounded p-4 shadow bg-white hover:bg-gray-50 transition"
            >
              <h3 className="text-lg font-bold">{job.jobTitle}</h3>
              <p className="text-sm text-gray-700">
                Company: {job.companyName}
              </p>
              <p className="text-sm text-gray-700">Salary: ₹{job.salary}</p>
              <p className="text-sm text-gray-700">
                Experience: {job.experience} years
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobPostings;
