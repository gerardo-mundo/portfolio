import { Element } from "react-scroll";
import { BlockContainer } from "../styles/style";
import { technologies } from "../utils";
import { CanvasBall } from "../components";

export const Technologies = () => {
  return (
    <section>
      <Element className="section" name="tech">
        {technologies.map((technology) => (
          <CanvasBall key={technology.name} icon={technology.icon} />
        ))}
      </Element>
    </section>
  );
};
