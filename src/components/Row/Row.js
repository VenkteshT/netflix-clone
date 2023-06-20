import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const IMG_URL = "https://image.tmdb.org/t/p/original/";
export default function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchMovies() {
      const result = await axios.get(fetchURL);
      setMovies(result.data.results);
      return result;
    }
    fetchMovies();
  }, [fetchURL]);
  const opt = {
    height: "390px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  function handleClick(movie) {
    if (trailer) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title).then((url) => {
        const urlparams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlparams.get("v"));
      });
    }
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${IMG_URL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailer && <YouTube videoId={trailer} opts={opt} />}
    </div>
  );
}
