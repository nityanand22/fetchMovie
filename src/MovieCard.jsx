import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="border border-red-600 rounded-lg p-4 flex flex-col">
      <img
        src={movie.poster_path}
        alt={movie.title}
        className="rounded-lg mb-2 w-64"
      />
      <p className="text-red-900 font-bold">{movie.original_title}</p>
      <p>Language : {movie.original_language}</p>
      <p>{movie.release_date}</p>
      <p>⭐{movie.vote_average}</p>
      <p>Votes : {movie.vote_count}</p>
    </div>
  );
};

export default MovieCard;
