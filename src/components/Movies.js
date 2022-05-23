import React from "react";
import { movies } from "../data";

function Movies() {
  return <div><h1>Movies Page</h1>
    <ul>
      {movies.map(movie => <li key={movie.title}>{movie.title} - {movie.time}
        <ul>{movie.genres.map(genre => <li key={genre}>{genre}</li>)}</ul>
      </li>)}
    </ul>
  </div>;
}

export default Movies;
