import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await axios.get(requests.fetchNetflixOriginals);
      const randMovie = Math.floor(Math.random() * res.data.results.length - 1);
      setMovie(res.data.results[randMovie]);
    };
    fetchMovie();
  }, []);


  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0,n - 1) + "..." : str;
}


  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-btns">
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
        </div>
        <h1 className="banner-descripiton">{truncate(movie?.overview,150)}</h1>

      </div>
        <div className="banner-fade" />
    </header>
  );
};

export default Banner;
