import React from "react";

const User = ({ user }) => {
  return (
    <>
      <div className="container m-auto p-4  flex-col mt-6 flex w-1/4 border rounded-lg justify-center items-center shadow-lg">
        <h3 className="text-2xl">{user.name.first + " " + user.name.last} </h3>
        <img
          className="rounded-full shadow-xl blur-md border-2 hover:border-red-700"
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
