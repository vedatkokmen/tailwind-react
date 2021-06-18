import React from "react";
import faker from "faker";
const Hero = () => {
  return (
    <>
      <div className="header p-4 w-1/4 border">
        <div className="flex flex-row justify-between items-center">
          <div className="">
            <svg
              className="w-8 h-8 text-indigo-600 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
          <div className="">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="font-bold text-4xl">Data to enrich your</h3>
          <h3 className="font-bold text-indigo-600 text-4xl">
            online business
          </h3>
          <p className="text-sm text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut tenetur
            dolorem corporis fuga, facere dicta id veritatis est officia itaque
            numquam, delectus.
          </p>
        </div>
        <div className="buttons flex flex-col mt-4">
          <button className="bg-indigo-600 text-white py-4 rounded-md">
            Get started
          </button>
          <button className="bg-white text-indigo-600 py-4 shadow-md rounded-md mt-2">
            Live demo
          </button>
        </div>
        <img className="w-full mt-4" src={faker.image.business()} alt="Hey" />
      </div>
    </>
  );
};

export default Hero;
