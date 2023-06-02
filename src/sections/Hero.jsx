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
              Hi! <br /> My name is <br /> Gerardo Mundo<strong>.</strong>
            </h1>
          </Animator>
          <Animator>
            <h2>
              I&apos;m a Web Developer <span>| Fullstack</span>
            </h2>
          </Animator>
          <Animator>
            <p>
              I develope and implement solutions with: JavaScript, TypeScript,
              C#, Angular, React, .Net Core, ASP.Net and SQL Server.
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
