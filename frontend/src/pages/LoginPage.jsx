import React, { useState } from "react";
import AuthLayout from "../components/Login/authLayout";
import LoginForm from "../components/Login/loginForm";
import RegisterForm from "../components/Login/registerForm";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AuthLayout>
      {isLogin ? (
        <LoginForm switchForm={() => setIsLogin(false)} />
      ) : (
        <RegisterForm switchForm={() => setIsLogin(true)} />
      )}
    </AuthLayout>
  );
};

export default LoginPage;