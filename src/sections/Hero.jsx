import { Element } from "react-scroll";

import { Img, Left, Right } from "../styles/style";
import { Animator } from "../components/hoc/Animator";

export const Hero = () => {
  return (
    <header>
      <Element className="section" name="home">
        <Left>
          <Animator>
            <h1>
              ¡Hola! <br /> Me llamo <br /> Gerardo Mundo
            </h1>
          </Animator>
          <Animator>
            <h2>
              Desarrolador Web <span>| Fullstack</span>
            </h2>
          </Animator>
          <Animator>
            <p>
              Implemento soluciones con: JavaScript, TypeScript, C#, <br />{" "}
              Angular, React, .Net Core, ASP.Net.
            </p>
          </Animator>
        </Left>
        <Right>
          <Img alt="laptop_picture" src="../assets/laptop.png" />
        </Right>
      </Element>
    </header>
  );
};
