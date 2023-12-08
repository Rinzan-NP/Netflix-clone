import React from "react";
import { baseImage } from "../../constants/constant";

function Movie(props) {
  const { key, url } = props;
  console.log(url);
  return (
    <img
      className="movie-large movie-image"
      src={baseImage + url}
      alt="movie image"
    />
  );
}

export default Movie;
