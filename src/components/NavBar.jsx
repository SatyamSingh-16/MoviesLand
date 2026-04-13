import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-black/40 backdrop-blur-md fixed top-0 w-full z-50">
      <div className="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={28}
          height={28}
          fill={"#2dd4bf"}
          viewBox={"0 0 24 24"}
        >
          <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9.54 9 6.87 5h2.6l2.67 4zm5 0-2.67-4h2.6l2.67 4zM4 5h.46l2.67 4H4zm0 14v-8h16V9h-.46l-2.67-4H20v14z" />
        </svg>

        <Link
          to="/"
          className="text-xl font-bold text-white uppercase tracking-wider"
        >
          MoviesLand🍿
        </Link>
      </div>

      <div className="flex items-center space-x-10 text-sm font-semibold uppercase tracking-widest text-gray-300">
        <div className="cursor-pointer hover:text-white transition-colors border-b-2 border-transparent hover:border-teal-400 pb-1">
          <Link
            to="/watchlist"
            className="cursor-pointer hover:text-white transition-colors border-b-2 border-transparent hover:border-teal-400 pb-1"
          >
            WatchList
          </Link>
        </div>
        <div className="cursor-pointer hover:text-white transition-colors border-b-2 border-transparent hover:border-teal-400 pb-1">
          <Link
            to="/trending"
            className="cursor-pointer hover:text-white transition-colors border-b-2 border-transparent hover:border-teal-400 pb-1"
          >
            Trending
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
