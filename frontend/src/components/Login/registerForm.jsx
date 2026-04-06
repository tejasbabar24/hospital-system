import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../services/authServices/authThunk";
import { useNavigate } from "react-router-dom";

const RegisterForm = ({ switchForm }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading ,  error , success }= useSelector((state)=> state.auth);

  const [formData , setFormData] = useState({
    name:"",
    email:"",
    password:"",
    phone:""
  })
  const  handleInputChange =( e)=>{
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(registerUser(formData))
  }

  useEffect(()=>{
    if(success){
      navigate("/dashboard"); 
    }
  },[success])
  return (
    <div className="w-full max-w-[420px]">
      <h1 className="text-white text-[42px] font-light">Create Account</h1>
      <p className="mt-2 text-[16px] text-white/75">
        Register to get started
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Full Name"
          className="h-[46px] w-full rounded-full border border-white/35 bg-transparent px-5 text-white"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="h-[46px] w-full rounded-full border border-white/35 bg-transparent px-5 text-white"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          className="h-[46px] w-full rounded-full border border-white/35 bg-transparent px-5 text-white"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone"
          className="h-[46px] w-full rounded-full border border-white/35 bg-transparent px-5 text-white"
        />

        <button type="submit" className="h-[48px] w-full rounded-full bg-[#01485a] text-[16px] text-white">
          Register
        </button>
      </form>

      <p className="mt-10 text-center text-white">
        Already have an account?{" "}
        <span
          onClick={switchForm}
          className="cursor-pointer text-[#07384a] hover:underline"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;