import { Element } from "react-scroll";

import { Img, Left, Right } from "../styles/style";

export const Hero = () => {
  return (
    <header>
      <Element className="section" name="home">
        <Left>
          <h1>
            ¡Hola! <br /> Me llamo <br /> Gerardo Mundo
          </h1>
          <h2>
            Desarrolador Web <span>| Fullstack</span>
          </h2>

          <p>
            Implemento soluciones con: JavaScript, TypeScript, C#, <br />{" "}
            Angular, React, .Net Core, ASP.Net.
          </p>
        </Left>
        <Right>
          <Img alt="laptop_picture" src="../assets/laptop.png" />
        </Right>
      </Element>
    </header>
  );
};
