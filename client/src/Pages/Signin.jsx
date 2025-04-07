import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User signed in");
    console.log("Remember Me:", rememberMe);
    navigate("/dashboard");
  };

  const handleGoogleSignIn = () => {
    console.log("Signing in with Google...");
    navigate("/dashboard");
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ backgroundColor: "oklch(0.929 0.013 255.508)" }}
    >
      <div className="relative bg-white p-12 rounded-xl shadow-lg w-[500px] shadow-[0_0_15px_rgba(255,223,128,0.5)] border border-gray-300 text-justify">
        
        {/* Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        {/* Logo & Heading */}
        <div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-16 w-auto"
            src="./src/assets/images/homelogo1.png"
            alt="Your Company"
          />
          <h2 className="pt-6 text-center text-2xl font-bold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        {/* Form */}
        <div className="pt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <div className="pt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md bg-gray-100 px-4 py-2 text-gray-900 outline-none border border-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-gray-400"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="pt-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-600 hover:text-gray-500"
                >
                  Forgot password?
                </a>
              </div>
              <div className="pt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md bg-gray-100 px-4 py-2 text-gray-900 outline-none border border-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-gray-400"
                />
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center pt-2">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMe}
                className="h-4 w-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
              />
              <label htmlFor="rememberMe" className="pl-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            {/* Sign In Button */}
            <div>
              <button
                type="submit"
                className="pt-2 flex w-full justify-center rounded-md bg-gray-700 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-gray-600 focus:ring-2 focus:ring-gray-400"
              >
                Sign in
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="p-5 flex items-center my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm whitespace-nowrap">
              or continue with
            </span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Google Sign-In */}
          <div className="flex items-center justify-center">
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-md py-2 px-4 shadow-md hover:bg-gray-100 focus:ring-2 focus:ring-gray-400"
            >
              <img
                src="/images/googlelogo.png"
                alt="Google Logo"
                className="h-5 w-5 mr-2"
              />
              Google
            </button>
          </div>

          {/* Footer */}
          <p className="pt-6 text-center text-sm text-gray-700">
            Not a member?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="font-semibold text-gray-600 hover:text-gray-500"
            >
              Sign up now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
