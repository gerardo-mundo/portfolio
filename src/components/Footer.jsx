import { FooterContainer } from "../styles/style";

export const Footer = () => {
  const date = new Date();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return (
    <FooterContainer>
      <div className="img-grouper">
        <a
          target="_blank"
          href="https://github.com/gerardoMundo"
          rel="noreferrer"
        >
          <img
            src="../../assets/icons/github.png"
            srcSet="../../assets/icons/github.svg"
            alt="github-icon"
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/gerardo-mundo"
          rel="noreferrer"
        >
          <img
            src="../../assets/icons/linkedin.png"
            srcSet="../../assets/icons/linkedin.svg"
            alt="linkedin-icon"
          />
        </a>
      </div>
      <p>Gerardo Mundo | Portfolio</p>
      <p>
        All rights reserved <span>&copy;</span>
      </p>
      <p>
        {month} de {year}
      </p>
    </FooterContainer>
  );
};
