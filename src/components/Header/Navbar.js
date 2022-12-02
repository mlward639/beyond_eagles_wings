import { navbarItems } from "../../navbarItems";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbarItems">
        {navbarItems.map((item, index) => {
          return <NavbarItems items={item} key={index} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
