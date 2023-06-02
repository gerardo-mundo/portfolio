import { Element } from "react-scroll";
import { BlockContainer } from "../styles/style";
import { technologies } from "../utils";
import { CanvasBall } from "../components";
import { Animator } from "../components/hoc/Animator";

export const Technologies = () => {
  return (
    <section>
      <Element className="section" name="tech">
        <BlockContainer>
          <Animator>
            <h3>Technologies</h3>
          </Animator>
          <Animator>
            <h2>My tech stack.</h2>
          </Animator>
          <div className="cards-container">
            {technologies.map((technology) => (
              <CanvasBall key={technology.name} icon={technology.icon} />
            ))}
          </div>
        </BlockContainer>
      </Element>
    </section>
  );
};
