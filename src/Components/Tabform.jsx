import React, { useState } from 'react';
import axios from 'axios';
import PersonalDetails from './PersonalDetails';
import WorkDetails from './WorkDetails';

const Tabform = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [personalData, setPersonalData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
  });

  const [workData, setWorkData] = useState({
    companyName: '',
    designation: '',
    workLocation: '',
    experience: '',
    currentlyWorking: '',
  });

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWorkChange = (e) => {
    const { name, value } = e.target;
    setWorkData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  const combinedData = { 
    ...personalData, 
    ...workData,
    experience: Number(workData.experience)  // <-- convert here
  };

  try {
    const response = await axios.post('http://localhost:3000/submit', combinedData);
    console.log(response.data)
    alert('Form submitted successfully!');
    handleDiscard();
    setActiveTab(0);
  } catch (error) {
    console.error(error);
    alert(error.response?.data?.message || 'Failed to submit form. Please try again.');
  }
};



  const handleDiscard = () => {
    setPersonalData({
      fullName: '',
      email: '',
      phone: '',
      dob: '',
      gender: '',
    });
    setWorkData({
      companyName: '',
      designation: '',
      workLocation: '',
      experience: '',
      currentlyWorking: '',
    });
  };

  const tabs = [
    {
      name: 'Personal Details',
      component: (
        <PersonalDetails data={personalData} onChange={handlePersonalChange} />
      ),
    },
    {
      name: 'Work Details',
      component: <WorkDetails data={workData} onChange={handleWorkChange} />,
    },
  ];

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex space-x-4 mb-6">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 rounded ${
              activeTab === i
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {tabs[activeTab].component}

        {activeTab === 1 && (
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleDiscard}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
            >
              Discard
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Tabform;

