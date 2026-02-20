import { Link } from "react-router-dom";

function SideBar({ query, setQuery }) {

  return (
    <aside className="sidebar">

      <input
        type="text"
        placeholder="Search games..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <Link to="/about">About</Link>

    </aside>
  );
}

export default SideBar;