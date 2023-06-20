import React, { useState, useEffect } from "react";
import "./banner.css";
import axios from "../../axios";
import requests from "../../requests";
const IMG_URL = "https://image.tmdb.org/t/p/original/";
export default function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchMovie() {
      const result = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length)
        ]
      );
    }
    fetchMovie();
  }, []);
  const shortOverView = (str, n) =>
    str?.length > n ? str.slice(0, n - 1) + "..." : str;
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${IMG_URL}${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
          <h1 className="banner_description">
            {shortOverView(movie?.overview, 150)}
          </h1>
        </div>
      </div>
    </header>
  );
}
