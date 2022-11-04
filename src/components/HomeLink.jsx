import { NavLink } from "react-router-dom";

function HomeLink() {
  return (
    <div className="nav-item">
      <NavLink to="/" className="link">
        Home
      </NavLink>
    </div>
  );
}

export default HomeLink;
