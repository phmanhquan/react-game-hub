import React from "react";
import useGenres, { Genres } from "../hooks/useGenres";
import useData from "../hooks/useData";

const GenreList = () => {
  const { data } = useData<Genres>("/genres");
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
