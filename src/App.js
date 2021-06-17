import React, { useState, useEffect } from "react";
//import ProfileCard from "./components/ProfileCard";
//import Blog from "./components/Blog";
import User from "./components/User";
import axios from "axios";

const App = () => {
  const myUser = {
    gender: null,
    name: {
      title: null,
      first: null,
      last: null,
    },
    location: {
      street: {
        number: null,
        name: null,
      },
      city: null,
      state: null,
      country: null,
      postcode: null,
      coordinates: {
        latitude: null,
        longitude: null,
      },
      timezone: {
        offset: null,
        description: null,
      },
    },
    email: null,
    login: {
      uuid: null,
      username: null,
      password: null,
      salt: null,
      md5: null,
      sha1: null,
      sha256: null,
    },
    dob: {
      date: null,
      age: null,
    },
    registered: {
      date: null,
      age: null,
    },
    phone: null,
    cell: null,
    id: {
      name: null,
      value: null,
    },
    picture: {
      large: null,
      medium: null,
      thumbnail: null,
    },
    nat: null,
  };

  const [user, setUser] = useState(myUser);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?nat=tr")
      .then((res) => setUser(res.data.results[0]));
  }, []);

  return <User user={user} />;
};

export default App;
