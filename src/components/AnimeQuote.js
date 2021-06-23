import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import axios from "axios";

const myQuote = {
  anime: "",
  character: "",
  quote: "",
};

const AnimeQuote = () => {
  const [quote, setQuote] = useState(myQuote);
  const [image, setImage] = useState(null);

  var unsplashConfig = {
    method: "get",
    url: `https://api.unsplash.com/search?client_id=9w7lYvy68Bv6wP0SSMzlm3CVNHlRBlFqfJBEfVvXS6s&query=${quote.character}&count=1`,
    headers: {},
  };

  function fetchData() {
    axios.get("https://animechan.vercel.app/api/random").then((res) => {
      console.log(res.data);
      setQuote(res.data);
    });

    axios(unsplashConfig)
      .then(function (response) {
        console.log(response.data.photos);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="container w-1/3">
        <img src={image} alt="Char" />
        <div>{quote.quote}</div>
      </div>
    </Layout>
  );
};

export default AnimeQuote;
