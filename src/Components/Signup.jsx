import axios from 'axios'
import React, { useState } from 'react'
import { BASE_URL } from '../utils/constants'

const Signup = () => {
    const [username,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    const handleSignup=async()=>{
        try{
            const res=await axios.post(BASE_URL+"/signup",{
                username,
                email,
                password
            },
        {
            withCredentials:true
        });
         setSuccess("Signup successful!");
            setError(""); 
            console.log(res.data);
        } catch (error) {
            setError(error.response?.data || "Signup failed");
            setSuccess(""); 
            console.log(error);
        }
    }
  return (
    <div className="flex justify-center my-10">
    <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">username</span>
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <p className="text-red-500 text-center">{error}</p>
        <p className="text-green-500 text-center">{success}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleSignup}>Signup</button>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Signup;