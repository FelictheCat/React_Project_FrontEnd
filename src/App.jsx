import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MyGames from "./pages/MyGames";
import Search from "./pages/Search";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/my-games" element={<MyGames />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
