import { Link } from "react-scroll";
import { NavbarContainer } from "../styles/style";
import { navLinks } from "../utils/";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="aligned">
        <img src="../../assets/icons/terminal.svg" alt="terminal-icon" />
        <h3>Gerardo_Dev</h3>
      </div>
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
      </nav>
    </NavbarContainer>
  );
};
