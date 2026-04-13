function MovieCard({ poster_path, name }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="flex flex-col items-center w-[200px] cursor-pointer group">
      <div
        className="h-[40vh] w-full bg-center bg-cover rounded-xl shadow-lg 
                   transition-transform duration-200 ease-out
                   group-hover:scale-105 group-hover:shadow-[0_10px_30px_rgba(45,212,191,0.3)]"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      <div className="mt-3 text-center">
        <p
          className="text-white text-sm font-semibold tracking-wide 
                      group-hover:text-teal-400 transition-colors duration-200 
                      whitespace-nowrap overflow-hidden text-ellipsis w-[190px]"
        >
          {name}
        </p>
      </div>
    </div>
  );
}
export default MovieCard;
