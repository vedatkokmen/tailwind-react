import React from "react";

const Modal = () => {
  return (
    <div className="container m-auto w-1/4 bg-gray-50 flex flex-col justify-center p-4 items-center mt-10 ">
      <div className="rounded-full bg-red-100 p-2">
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
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <div className="p-4 flex justify-center flex-col items-center">
        <h3 className="text-xl mb-2 ">Deactive account</h3>
        <h3 className="text-xs mb-2 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt cum
          rem fugit quasi. Consectetur temporibus repellat aperiam praesentium?
          Error?
        </h3>
        <button className="bg-red-500 text-white block w-full m-2 p-2 rounded-sm border-2 hover:bg-red-400 ">
          Deactivate
        </button>
        <button className="bg-white text-black block w-full m-2 p-2 rounded-sm border-2 hover:bg-gray-50 ">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
