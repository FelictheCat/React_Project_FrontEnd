import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <h2>🎮</h2>
{/*AppLogo once made */}
      </Link>

      <div>
        <Link to="/">Home</Link>
        <Link to="/my-games">My List</Link>
      </div>
    </nav>
  );
}

export default NavBar;
