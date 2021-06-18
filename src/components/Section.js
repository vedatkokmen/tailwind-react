import React from "react";

const Section = () => {
  return (
    <div className="container flex flex-col justify-center font-bold w-1/3 bg-gray-50 pl-8">
      <h3 className="text-3xl text-gray-900">Ready to dive in?</h3>
      <h3 className="text-3xl text-indigo-600">
        Start your free trial <br /> today.
      </h3>
      <div className="flex flex-row mt-4">
        <button className="bg-indigo-600 mr-4 p-2 text-sm rounded-md text-white">
          Get started
        </button>
        <button className="bg-white border p-2 text-indigo-600 rounded-md text-sm">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Section;
