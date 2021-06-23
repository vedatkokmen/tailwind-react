import React, { useEffect, useState } from "react";
import faker from "faker";
import axios from "axios";

var config = {
  method: "get",
  url: "https://evilinsult.com/generate_insult.php?lang=en&type=json",
  headers: {},
};

const QuoteCard = () => {
  const [insult, setInsult] = useState("");

  useEffect(() => {
    axios(config)
      .then(function (response) {
        console.log(response);
        setInsult(response.data.insult);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="  bg-yellow-300 w-1/3 py-8 px-6 space-y-2 rounded-lg">
        <div className="tag text-base text-red-400 font-bold">
          <h3>#INSULT</h3>
        </div>
        <div className="absolute opacity-90">
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.95">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5556 33.4444V38.5H31.5V70H0.000775983L0 33.4444C0 21.4003 3.48649 11.429 10.3617 5.83328C15.1177 1.96256 20.8827 0 28 0V16.5789C24.1364 16.5789 15.5556 18.1255 15.5556 33.4444ZM54.0556 33.4444V38.5H70V70H38.5V33.4444C38.5 21.4003 41.5976 11.429 48.4728 5.83328C53.2288 1.96256 59.3827 0 66.5 0V16.5789C62.6364 16.5789 54.0556 18.1255 54.0556 33.4444Z"
                fill="#FFEEB3"
              />
            </g>
          </svg>
        </div>
        <div className="flex items-center">
          <h3 className="text-4xl z-10 mt-8 px-6 leading-snug font-bold text-gray-900">
            {insult.toString()}
          </h3>
        </div>
        <div className="ml-4 mt-6 flex">
          <img
            src={faker.image.avatar()}
            alt="Avatar"
            className="rounded-full border mb-2 h-12 w-12"
          />
          <div>
            <p className=" text-red-500 ml-4">
              {faker.name.firstName() + " " + faker.name.lastName()}
            </p>
            <p className="text-xs text-red-400 ml-4">{faker.name.jobTitle()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
