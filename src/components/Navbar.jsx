import { Link } from "react-scroll";
import { NavbarContainer } from "../styles/style";
import { navLinks } from "../utils/";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <h3>Logo</h3>
      <ul>
        {navLinks.map((link) => {
          return (
            <Link
              key={link.id}
              activeClass="active"
              smooth={true}
              to={link.section}
            >
              {link.name}
            </Link>
          );
        })}
      </ul>
    </NavbarContainer>
  );
};
