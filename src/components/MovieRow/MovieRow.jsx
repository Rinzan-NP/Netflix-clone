import React, { useEffect } from "react";
import Movie from "./Movie";
import "./Style.css/";
import { useState } from "react";
import axios from "../../axios/axios";

function MovieRow(props) {
  const { title, url } = props;
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setmovies(response.data.results);
      console.log(response.data.results);
    });
  }, []);

  return (
    <>
      <div className="bg-black pl-4 pt-4">
        <h1 className="text-white text-lg ml-3 font-bold">{title}</h1>
        <div className="flex overflow-x-scroll overflow-y-hidden p-3 posters">
          {movies
            ? movies.map((e, i) => <Movie key={i} url={e.poster_path} />)
            : ""}
        </div>
      </div>
    </>
  );
}

export default MovieRow;
