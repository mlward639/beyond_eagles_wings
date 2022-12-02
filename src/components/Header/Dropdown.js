// import NavbarItems from "./NavbarItems";
import { Link } from "react-router-dom";

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown  ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        //dont think need,... delete later in cleanup if not needed
        // <NavbarItems items={submenu} key={index} />
        <li key={index} className="navbar-items">
          <Link to={submenu.url}>{submenu.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
