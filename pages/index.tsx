import type { NextPage } from "next";
import Router from "next/router";
import axios from "axios";
import { useState } from "react";

const Home: NextPage = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleLogin = () => {
    if (!loginDetails.username || !loginDetails.password) {
      setError("You must enter a username and password");
      return;
    }

    setError("");
    axios
      .post("/api/loginAuth", loginDetails)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          Router.push("/dashboard");
        }
      })
      .catch((err) => {
        console.error(err);
        setError(err.response.data.message);
      });
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-yellow-300">
      <h1 className="text-5xl mb-2 tracking-wide"> LEM🍋N</h1>
      <p className="text-2xl mb-4 tracking-wide">Software solutions</p>
      <div
        className={`w-[24rem] shadow-xl p-12 flex flex-col rounded-md bg-black text-white ${
          error && "animate-wiggle"
        }`}
      >
        <label>Username:</label>
        <input
          type="text"
          className="border-2 mb-4 p-1 rounded-md text-black"
          onChange={(e) =>
            setLoginDetails({ ...loginDetails, username: e.target.value })
          }
        ></input>
        <label>Password:</label>
        <input
          type="password"
          className="border-2 p-1 rounded-md text-black "
          onChange={(e) =>
            setLoginDetails({ ...loginDetails, password: e.target.value })
          }
        ></input>
        {error && <p className="mt-4 text-yellow-400 text-center">{error}</p>}
        <button
          className="mt-6 bg-yellow-300 rounded-md py-2 w-1/2 mx-auto shadow-md text-black hover:bg-yellow-400 transition duration-300"
          onClick={handleLogin}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Home;
