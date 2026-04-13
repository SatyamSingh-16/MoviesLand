import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import WatchList from "./components/WatchList";
import Trending from "./components/Trending";
import Movies from "./components/Movies";
import Banner from "./components/Banner";
import Pagination from "./components/Pagination";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="min-h-screen bg-[#0f171e]">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={<div className="pt-24 px-10 text-white">WatchList</div>}
          />
          <Route
            path="/trending"
            element={<div className="pt-24 px-10 text-white">Trending</div>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
