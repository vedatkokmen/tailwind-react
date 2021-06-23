import React from "react";

const Form = () => {
  return (
    <div className="container w-1/3 border rounded-md bg-white">
      <div className="flex flex-col justify-center items-center">
        <svg
          className="w-12 text-indigo-600 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          />
        </svg>

        <div>
          <h3 className="text-3xl font-bold">Sign in to your account</h3>
        </div>

        <div>
          <span>Or </span>
          <span className="text-indigo-600">start your 14-day trial</span>
        </div>

        <div className="mt-6">
          <input
            className="border rounded-md p-2"
            name="Email"
            placeholder="Email address"
          />
          <br />
          <input
            className="border rounded-md p-2"
            name="Password"
            placeholder="Password"
          />
        </div>
      </div>

      <div className="flex-flex-row justify-between">
        <div>
          <input type="checkbox" />
          <span className="ml-2">Remember me</span>
          <h3 className="text-indigo-600">Forgot your password?</h3>
        </div>
      </div>
    </div>
  );
};

export default Form;
