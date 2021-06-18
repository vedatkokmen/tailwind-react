import React from "react";
import faker from "faker/locale/tr";

const Table = ({ user }) => {
  return (
    <div className="container w-1/3 mt-6 m-auto flex flex-col justify-start">
      <div className="name bg-gray-200 p-2 pl-6 text-gray-500 ">NAME</div>
      <div className="bg-white p-4 flex flex-row items-center justify-start border-b-2 border-l-2 border-r-2 ">
        <img
          src={faker.image.avatar()}
          className="h-12 w-12 rounded-full"
          alt="Avatar"
          srcset=""
        />
        <div className="details ml-6">
          <h3>{faker.name.firstName() + " " + faker.name.lastName()} </h3>
          <h4 className="text-sm text-gray-400">{faker.internet.email()} </h4>
        </div>
      </div>
      <div className="bg-white p-4 flex flex-row items-center justify-start border-2 ">
        <img
          src={faker.image.avatar()}
          className="h-12 w-12 rounded-full"
          alt="Avatar"
          srcset=""
        />
        <div className="details ml-6">
          <h3>{faker.name.firstName() + " " + faker.name.lastName()} </h3>
          <h4 className="text-sm text-gray-400">{faker.internet.email()} </h4>
        </div>
      </div>
      <div className="bg-white p-4 flex flex-row items-center justify-start border-2 ">
        <img
          src={faker.image.avatar()}
          className="h-12 w-12 rounded-full"
          alt="Avatar"
          srcset=""
        />
        <div className="details ml-6">
          <h3>{faker.name.firstName() + " " + faker.name.lastName()} </h3>
          <h4 className="text-sm text-gray-400">{faker.internet.email()} </h4>
        </div>
      </div>
    </div>
  );
};

export default Table;
