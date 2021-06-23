import React from "react";
import Layout from "./Layout";

const Banner = () => {
  return (
    <Layout>
      <div>
        <div className="container m-auto max-w-xs rounded-md bg-indigo-600 p-4">
          <div className="rounded-md text-white flex-row flex justify-between items-center ">
            <svg
              className="w-8 p-2 rounded-md h-8 bg-indigo-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <div className="text-white">
              <h3>We announced new products!</h3>
            </div>
            <div className="text-white rounded-md cursor-pointer">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div className="">
            <button className="block bg-white w-full text-sm text-indigo-600 rounded-md mt-4 py-2 hover:bg-gray-100">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Banner;
