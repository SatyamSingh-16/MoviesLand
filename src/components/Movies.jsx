import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(1);

  const handlePrev = () => {
    if (pages > 1) {
      setPages(pages - 1);
    }
  };

  const handleNext = () => {
    setPages(pages + 1);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=967522f00103ac1e70ec6c1c4e8b8a7a&language=en-US&page=${pages}`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [pages]);

  return (
    <div className="bg-[#0f171e] pb-10">
      <div className="bg-white py-6 mb-8 flex justify-center items-center shadow-md">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase tracking-widest border-b-4 border-teal-500 pb-2">
          Trending Movies
        </h3>
      </div>

      <div className="flex justify-center flex-wrap gap-8 px-10">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title || movieObj.title}
            />
          );
        })}
      </div>
      <Pagination
        handlePrev={handlePrev}
        handleNext={handleNext}
        pages={pages}
      />
    </div>
  );
}

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=967522f00103ac1e70ec6c1c4e8b8a7a&language=en-US&page=1
