import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';

const Password = () => {
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const pass= useSelector((store) => store.password);
    console.log(pass)
    const navigate=useNavigate()
    const Submit=()=>{
        if(password===pass){
            navigate("/feed", { replace: true });

        }
        else{
            setError("Invalid Credentials")
        }
    }
  return (
      <div className="flex justify-center my-10">
    <div className="card  w-96 shadow-sm bg-black">
  <div className="card-body">
    <label className="form-control w-full max-w-xs my-2">
      <div className="label">
        <span className="label-text">Password</span>
      </div>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input input-bordered w-full max-w-xs"
      />
    </label>
    <p className="text-red-500 text-center">{error}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={Submit}>Submit</button>
    </div>
  </div>
</div>
</div>
  )
}

export default Password
































































































