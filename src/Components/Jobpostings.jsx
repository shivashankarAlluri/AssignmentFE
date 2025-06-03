import React, { useEffect, useState } from "react";
import axios from "axios";

const JobPostings = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/jobs", { withCredentials: true })
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch jobs:", err.message);
        setLoading(false);
      });
  }, []);

  const handleApply = (id) => {
    alert(`Applied for job ID: ${id}`);
  };

  const handleReject = (id) => {
    alert(`Rejected job ID: ${id}`);
  };

  const handleViewDetails = (id) => {
    alert(`View details for job ID: ${id}`);
  };

  const handleSaveJob = (id) => {
    alert(`Saved job ID: ${id}`);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">
        Job Postings
      </h2>

      {loading ? (
        <div className="space-y-4 w-full max-w-6xl">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="animate-pulse bg-white border p-4 rounded shadow"
            >
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      ) : jobs.length === 0 ? (
        <p className="text-gray-600 text-center">No companies are hiring now.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl justify-center">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white border rounded-lg p-6 shadow hover:shadow-md transition flex flex-col justify-between text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {job.jobTitle}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Company:</span> {job.companyName}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Salary:</span> ₹{job.salary}
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-medium">Experience:</span> {job.experience} years
              </p>

              <div className="flex flex-wrap justify-center gap-3 mt-3">
                <button
                  onClick={() => handleApply(job._id)}
                  className="px-4 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Apply
                </button>
                <button
                  onClick={() => handleReject(job._id)}
                  className="px-4 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Reject
                </button>
                <button
                  onClick={() => handleViewDetails(job._id)}
                  className="px-4 py-1 text-sm bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleSaveJob(job._id)}
                  className="px-4 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Save Job
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobPostings;
