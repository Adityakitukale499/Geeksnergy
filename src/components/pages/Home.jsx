import React, { useEffect } from "react";
import "./Home.css";
import data from "../data/data";

import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { result: movies } = data;
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem("login") == "no" && navigate("/login");
  });

  return (
    <div className="home-container">
      <div className="movie-tab">
        <h3>Welcome to my webSite! pick your favourite movie</h3>
        {movies.map((movie) => (
          <Card {...movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
