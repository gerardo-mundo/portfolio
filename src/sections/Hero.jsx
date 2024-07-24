import { Element } from "react-scroll";

import { Img, Left, Right } from "../styles/style";
import { Animator } from "../components/hoc/Animator";
import laptop from "/laptop.png";

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
              I&apos;m a Web Developer <span>| Full-Stack</span>
            </h2>
          </Animator>
          <Animator>
            <p>
              I develope and implement solutions with: HTML, CSS, JavaScript,
              TypeScript, Angular, React, .Net Core, ASP.Net and SQL Server.
            </p>
          </Animator>
        </Left>
        <Right>
          <Img alt="laptop-picture" src={laptop} />
        </Right>
      </Element>
    </header>
  );
};
