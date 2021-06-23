import React from "react";
import faker from "faker";
import Layout from "./Layout";

const CardTwo = () => {
  return (
    <Layout>
      <div className="container w-1/5 border m-auto justify-center my-20 rounded-md ">
        <img src={faker.image.fashion()} alt="Fashion" />
        <div className="flex flex-row ml-4 mt-2">
          <div>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <div className="text-xs ml-2 text-gray-400">Members only</div>
        </div>
        <div className="flex flex-col mt-2 ml-4">
          <h3>
            Can coffee make you a better <br /> developer?
          </h3>
          <p className="text-gray-500 text-xs mr-4 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            accusamus asperiores quo perspiciatis exercitationem eum consectetur
            nobis ea sapiente atque!
          </p>
        </div>
        <div className="ml-4 mt-6 flex">
          <img
            src={faker.image.avatar()}
            alt="Avatar"
            className="rounded-full border mb-2 h-8 w-8"
          />
          <div>
            <p className="text-xs text-gray-400 ml-4">
              {faker.name.firstName() + " " + faker.name.lastName()}
            </p>
            <p className="text-xs text-gray-400 ml-4">Aug 18</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CardTwo;
