import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios/axios";
import { api_key, baseImage } from "../../constants/constant";

function Banner() {
  const [banner, setbanner] = useState({});
  
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`
      )
      .then((response) => {
        console.log(response.data.results[0]);
        setbanner(response.data.results[0]);
      });

    
  }, []);

  return (
    <div className="banner" style={{backgroundImage : `url(${baseImage + banner.poster_path})`}}>
      <div className="content py-80">
        <h1 className="title">{banner.title}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{banner.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
