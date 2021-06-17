import React from "react";

const User = ({ user }) => {
  return (
    <>
      <div className="container bg-gray-100 m-auto flex-col mt-6 flex justify-center items-center">
        <h3 className="text-2xl">{user.name.first + " " + user.name.last} </h3>
        <img
          className="rounded-full shadow-xl border-2"
          src={user.picture.large}
          alt="Pic"
        />
        <h3 className="text-base">
          {user.location.city + " / " + user.location.country}
        </h3>
        <p className="text-base">
          {user.location.street.name + " " + user.location.postcode}
        </p>
      </div>
    </>
  );
};
export default User;
