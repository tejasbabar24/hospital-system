import React from "react";
import { FaGoogle, FaApple, FaUserCircle } from "react-icons/fa";
import ilustration from "../assets/images/login-illustration.png-Photoroom.png";
import Logo from "../assets/images/Logo.png";


const LoginPage = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-[#005e67] relative font-['Poppins']">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#002a43_0%,#004f63_32%,#00656a_100%)]" />

      {/* Soft background glows */}
      <div className="absolute left-[-120px] top-0 h-full w-[280px] bg-[#001f35]/40 blur-3xl" />
      <div className="absolute right-[-100px] bottom-[-80px] h-[240px] w-[240px] rounded-full bg-[#0d7a7d]/20 blur-3xl" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        {/* Main card */}
        <div className="relative w-full max-w-[1050px] rounded-[36px] bg-[linear-gradient(135deg,rgba(150,180,182,0.82),rgba(125,164,166,0.76))] shadow-[0_30px_80px_rgba(0,0,0,0.24)] backdrop-blur-md border border-white/10 min-h-[560px]">
          
          {/* Floating logo top-right */}
          <div className="absolute right-[32px] top-[-30px] h-[88px] w-[96px] rounded-[18px] bg-[#014c59] shadow-[0_10px_25px_rgba(0,0,0,0.28)] flex items-center justify-center">
            <div className="relative h-[88px] w-[96px]">
              <img src={Logo} alt="" srcset="" className="h-full w-full object-cover" />
                 </div>
          </div>

          <div className="grid min-h-[560px] grid-cols-1 lg:grid-cols-[1.05fr_1.25fr]">
            {/* Left illustration - your PNG */}
            <div className="relative hidden lg:block px-8 pt-16 pb-20">
              <img
                src={ilustration} // 👈 Put your PNG here
                alt="Medical login illustration"
                className="w-full max-w-[500px] h-auto mx-auto object-contain"
              />
            </div>

            {/* Right content */}
            <div className="relative flex items-center justify-center px-8 py-14 sm:px-10 md:px-14 lg:px-16">
              <div className="w-full max-w-[520px]">
                <div className="grid grid-cols-1 md:grid-cols-[1.1fr_140px] items-center gap-8 md:gap-10">
                  {/* Form area */}
                  <div>
                    <h1 className="text-white text-[52px] leading-none font-light tracking-[-0.02em]">
                      Welcome!
                    </h1>

                    <p className="mt-3 text-[19px] text-white/75 font-light">
                      Login to your account
                    </p>

                    <form className="mt-10 space-y-5">
                      <div>
                        <label className="sr-only">Email</label>
                        <input
                          type="email"
                          placeholder="Email"
                          className="h-[54px] w-full rounded-full border border-white/35 bg-transparent px-7 text-white placeholder:text-white/80 outline-none transition duration-300 focus:border-white/60 focus:shadow-[0_0_0_4px_rgba(255,255,255,0.06)]"
                        />
                      </div>

                      <div>
                        <label className="sr-only">Password</label>
                        <input
                          type="password"
                          placeholder="Password"
                          className="h-[54px] w-full rounded-full border border-white/35 bg-transparent px-7 text-white placeholder:text-white/80 outline-none transition duration-300 focus:border-white/60 focus:shadow-[0_0_0_4px_rgba(255,255,255,0.06)]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="mt-3 h-[56px] w-full rounded-full bg-[#01485a] text-[20px] font-medium text-white shadow-[0_14px_24px_rgba(0,0,0,0.18)] transition duration-300 hover:bg-[#013d4c] active:scale-[0.99]"
                      >
                        Login
                      </button>
                    </form>

                    <p className="mt-20 text-center text-[18px] text-white/90">
                      Don’t have an account?{" "}
                      <span className="font-medium text-[#07384a] cursor-pointer hover:underline">
                        Register
                      </span>
                    </p>
                  </div>

                  {/* Social section */}
                  <div className="flex flex-col items-center md:items-start md:pl-8 relative">
                    <div className="hidden md:block absolute left-0 top-1/2 h-[170px] w-px -translate-y-1/2 bg-[#0f6f75]" />
                    <p className="text-[18px] text-white/75 mb-6">Login with</p>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        aria-label="Login with Google"
                        className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#033f55] text-white shadow-[0_10px_18px_rgba(0,0,0,0.18)] transition hover:scale-105"
                      >
                        <FaGoogle className="text-[22px]" />
                      </button>

                      <button
                        type="button"
                        aria-label="Login with Apple"
                        className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#033f55] text-white shadow-[0_10px_18px_rgba(0,0,0,0.18)] transition hover:scale-105"
                      >
                        <FaApple className="text-[22px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile user icon */}
              <div className="absolute left-5 top-5 lg:hidden flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0a5360] text-white shadow-lg">
                <FaUserCircle className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;