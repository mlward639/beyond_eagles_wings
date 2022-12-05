import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";

import { Link } from "react-router-dom";

const NavbarItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className="navbar-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="navbar"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <Link to={items.url}>{items.title}</Link>

            {<span className="arrow" />}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        //DONT THINK I NEED... If not, delete later in cleanup
        // ) : !items.url && items.submenu ? (
        //   <>
        //     <button
        //       type="button"
        //       aria-haspopup="navbar"
        //       aria-expanded={dropdown ? "true" : "false"}
        //       onClick={() => setDropdown((prev) => !prev)}
        //     >
        //       {items.title}
        //     </button>
        //     <Dropdown submenus={items.submenu} dropdown={dropdown} />
        //   </>
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default NavbarItems;
