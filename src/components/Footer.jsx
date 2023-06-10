import { FooterContainer } from "../styles/style";
import { ContactIcons } from "./ContactIcons";

export const Footer = () => {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return (
    <FooterContainer>
      <ContactIcons />
      <p>Gerardo Mundo | Portfolio</p>
      <p>
        All rights reserved <span>&copy;</span>
      </p>
      <p>
        {year}, {month}.
      </p>
    </FooterContainer>
  );
};
