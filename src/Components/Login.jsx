import React, { useState } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addPassword } from '../utils/passwordSlice'


const Login = () => {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const [email,setEmail]=useState("")
    const[error,setError]=useState("")
    const handleLogin=async()=>{
        try{
            const res=await axios.post(BASE_URL+"/login",{
                email
            },
        {
            withCredentials:true
        });
        console.log(res)
        console.log(res?.data?.user?.password)
        dispatch(addPassword(res.data?.user?.password))
        if(res?.data?.message==="Email found"){
            console.log("Navigating to password page")
            navigate("/password")
        }
        }
        catch(error){
            setError(error)
        }
    }
  return (
     <div className="flex justify-center my-10">
    <div className="card w-96 shadow-sm bg-black">
  <div className="card-body">
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
    <p className="text-red-500 text-center">{error}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
</div>


  )
}

export default Login