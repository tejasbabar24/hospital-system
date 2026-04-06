import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authServices/authThunk";

const LoginForm = ({ switchForm }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token, loading, error } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  // ✅ redirect after login
  useEffect(() => {
    if (token) {
      navigate("/dashboard"); // change route
    }
  }, [token]);
  
  return (
    <div className="w-full max-w-[420px]">
      <h1 className="text-white text-[42px] font-light">Welcome!</h1>
      <p className="mt-2 text-[16px] text-white/75">Login to your account</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="h-[46px] w-full rounded-full border border-white/35 bg-transparent px-5 text-white placeholder:text-white/70 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          name="password"
          className="h-[46px] w-full rounded-full border border-white/35 bg-transparent px-5 text-white placeholder:text-white/70 outline-none"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button 
        type="submit"
        className="h-[48px] w-full rounded-full bg-[#01485a] text-[16px] text-white">
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="mt-10 text-center text-white">
        Don’t have an account?{" "}
        <span
          onClick={switchForm}
          className="cursor-pointer text-[#07384a] hover:underline"
        >
          Register
        </span>
      </p>
    </div>
  );
};

export default LoginForm;