import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const App = () => {
  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    const data = await fetch("https://jsonfakery.com/movies/paginated");
    const json = await data.json();
    setMovie(json.data);
    console.log(json.data);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  if (!movie) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Loading...</h1>
      </div>
    );
  }
  if (movie.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">No Movies Found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="flex justify-center font-extrabold text-4xl mb-5">
        <u>Movies</u>
      </h1>
      <div className="flex flex-wrap gap-4">
        {movie && movie.map((item) => <MovieCard key={item.id} movie={item} />)}
      </div>
    </div>
  );
};

export default App;
