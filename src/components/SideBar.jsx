import { Link } from "react-router-dom";

function SideBar() {
  return (
    <aside className="sidebar">

      <Link to="/">
        <h2>🎮</h2>
      </Link>

      <Link to="/search">Search</Link>
      <Link to="/my-games">My List</Link>
      <Link to="/about">About</Link>

    </aside>
  );
}

export default SideBar;