"use client";
import React, { useState } from "react";

const LoginPage = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === "test@123") {
      setError("");
      handleLogin(true);
      console.log("Logged in");
    } else {
      setError("Wrong password, enter your correct password!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center py-12">
      <div className="bg-gray-200 max-w-md w-full space-y-8 border border-gray-300 rounded-lg shadow-lg py-8 px-6">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h1>
        </div>

        <form action="" className="mt-10 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Type your email"
              value={email}
              name="email"
              required
              onChange={handleEmail}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={handlePassword}
              placeholder="Enter your password"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:border-blue-500"
            />
          </div>

          {error && <p className="text-red-700 text-sm">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center font-medium bg-blue-600 hover:bg-blue-700 rounded-md py-2 px-3 border border-transparent "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
