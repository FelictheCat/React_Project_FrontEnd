import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

function SideBar() {
  return (
    <aside className="sidebar">
      <Link to="/">
        <img src={logo} alt="Logo" className="sidebar-logo"/>
      </Link>

      <Link to="/search">Search</Link>
      <Link to="/my-games">My List</Link>
      <Link to="/about">About</Link>
    </aside>
  );
}

export default SideBar;
