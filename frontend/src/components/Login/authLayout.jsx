import React from "react";
import ilustration from "../../assets/images/login-illustration.png-Photoroom.png";
import Logo from "../../assets/images/Logo.png";
import { FaUserCircle, FaGoogle, FaApple } from "react-icons/fa";

const AuthLayout = ({ children }) => {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  const handleAppleLogin = () => {
    alert("Apple login coming soon 🍎");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#005e67] relative font-['Poppins']">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#002a43_0%,#004f63_32%,#00656a_100%)]" />

      <div className="absolute left-[-120px] top-0 h-full w-[280px] bg-[#001f35]/40 blur-3xl" />
      <div className="absolute right-[-100px] bottom-[-80px] h-[240px] w-[240px] rounded-full bg-[#0d7a7d]/20 blur-3xl" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="relative w-full max-w-[1050px] rounded-[36px] bg-[linear-gradient(135deg,rgba(150,180,182,0.82),rgba(125,164,166,0.76))] shadow-[0_30px_80px_rgba(0,0,0,0.24)] backdrop-blur-md border border-white/10 min-h-[500px]">
          {/* Logo */}
          <div className="absolute right-[32px] top-[-30px] h-[80px] w-[90px] rounded-[18px] bg-[#014c59] flex items-center justify-center">
            <img src={Logo} className="h-full w-full object-cover" />
          </div>

          <div className=" grid min-h-[400px] grid-cols-1 md:grid-flow-col -left-20">
            {/* Illustration */}
            {/* Illustration */}
            <div className="hidden lg:block relative">
              <img
                src={ilustration}
                className="absolute -left-35 top-3/6 -translate-y-1/2 w-[500px] max-w-none pointer-events-none"
              />
            </div>

            {/* Content */}
            <div className="flex items-center justify-center py-12 px-10">
              <div className="  grid grid-cols-1 md:grid-cols-[1.5fr_120px] lg:mr-16 gap-6 items-center">
                {/* 👇 Form */}
                <div>{children}</div>

                {/* 👇 Social Login */}
                <div className="flex flex-col items-center md:items-start relative h-full justify-center p-4">
                  {/* Divider line */}
                  <div className="hidden md:block absolute left-0 top-1/2 h-[260px] w-px -translate-y-1/2 bg-[#0f6f75]" />

                  {/* Content wrapper */}
                  <div className="flex flex-col items-center gap-5">
                    <p className="text-[14px] text-white/75 text-center">
                      Login with
                    </p>

                    <div className="flex gap-4">
                      {/* Google */}
                      <button
                        onClick={handleGoogleLogin}
                        className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#033f55] text-white shadow-md transition hover:scale-105"
                      >
                        <FaGoogle className="text-[18px]" />
                      </button>

                      {/* Apple */}
                      <button
                        onClick={handleAppleLogin}
                        className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#033f55] text-white shadow-md transition hover:scale-105"
                      >
                        <FaApple className="text-[18px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile icon */}
          <div className="absolute left-5 top-5 lg:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-[#0a5360] text-white">
            <FaUserCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
