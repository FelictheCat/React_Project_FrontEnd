import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MyGames from "./pages/MyGames";
import Search from "./pages/SearchBar";
import EditGame from "./pages/EditGame";
import GameDetails from "./pages/GameDetails";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import SideBar from "./components/SideBar";




function App() {
  return (
      <div>
        <BrowserRouter>
      <div className="sidebar">
        <SideBar />
      </div>
          <NavBar />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route path="/my-games" element={<MyGames />} />
            <Route path="/edit/:id" element={<EditGame />} />
            <Route path="/games/:id" element={<GameDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
