import React, { useState } from 'react';
import axios from 'axios';

const JobForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    jobTitle: '',
    salary: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/jobPostings', formData);
      alert('Job submitted successfully!');
      setFormData({ companyName: '', jobTitle: '', salary: '', experience: '' });
    } catch (err) {
      alert(err.response?.data?.error || 'Submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      <div>
        <label className="block mb-1 font-medium">Company Name</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="border px-3 py-2 w-full rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          className="border px-3 py-2 w-full rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Salary</label>
        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          className="border px-3 py-2 w-full rounded"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Experience (years)</label>
        <input
          type="number"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="border px-3 py-2 w-full rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Job
      </button>
    </form>
  );
};

export default JobForm;
