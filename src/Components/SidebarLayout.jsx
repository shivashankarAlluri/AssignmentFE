import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';

const SidebarLayout = () => {
 const user = useSelector((state) => state.user);
 console.log(user)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const fetchUser = async () => {
    try {
      const user = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      // console.log(user.data);
      dispatch(addUser(user.data));
    } catch (err) {
      if (err.status == 401) {
        navigate("/login");
      }
      console.log(err);
    }
  };

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, []);

  return (
    <div className="flex h-screen">
      {isSidebarOpen && (
        <div className="w-64">
          <Sidebar />
        </div>
      )}

      <div className="flex-1 p-4 bg-gray-900 text-white">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        >
          Toggle
        </button>
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;

