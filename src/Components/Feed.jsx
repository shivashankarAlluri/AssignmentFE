import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { addUser } from '../utils/userSlice';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Feed = () => {
    const dispatch=useDispatch()
    const user=useSelector((store)=>store.user)
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
    <div>
        <div className="text-center">
            <h1 className="text-4xl text-center">Welcome to the webpage</h1>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Feed