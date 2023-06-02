import { Tilt } from "react-tilt";
import { Element } from "react-scroll";

import { BlockContainer, Card } from "../styles/style";
import { cardsContent } from "../utils/cardsContent";
import { Animator } from "../components/hoc/Animator";

export const About = () => {
  return (
    <section>
      <Element className="section" name="about">
        <BlockContainer>
          <Animator>
            <h3>Introduction</h3>
          </Animator>
          <Animator>
            <h2>About me.</h2>
          </Animator>
          <Animator>
            <p>
              I&apos;m a web developer that specializes in JavaScript,
              TypeScript, React, Angular, and .Net Core Framework. I consider
              myself a passionate developer that learns quickly and who likes to
              collaborate with clients and each member of a team, with the
              finality of creating efficient, scalable, and friendship solutions
              focused to resolve problems in the real world.
            </p>
          </Animator>
          <Animator>
            <p>Let&apos;s work together to bring your ideas to the life!</p>
          </Animator>

          <div className="cards-container">
            {cardsContent.map((card) => (
              <Tilt key={card.title} style={{ width: "100%" }}>
                <Card key={card.title}>
                  <h3>{card.title}</h3>
                  <img src={card.icon} alt="icon" />
                  <p>{card.content}</p>
                </Card>
              </Tilt>
            ))}
          </div>
        </BlockContainer>
      </Element>
    </section>
  );
};
