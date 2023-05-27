import { Link } from "react-scroll";

import { navLinks } from "../utils";
import { ContactIcons } from "./ContactIcons";

export const NavbarItems = () => {
  return (
    <nav>
      {navLinks.map((link) => {
        return (
          <Link
            key={link.id}
            activeClass="active"
            className="nav-item"
            smooth={true}
            to={link.name}
          >
            {link.title}
          </Link>
        );
      })}
      <ContactIcons />
    </nav>
  );
};
