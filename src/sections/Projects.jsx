import { motion } from "framer-motion";

import { BlockContainer, CardImage } from "../styles/style";
import { projects } from "../utils/projects";
import { Element } from "react-scroll";
import { Animator } from "../components/hoc/Animator";

export const Projects = () => {
  return (
    <section>
      <Element className="section" name="projects">
        <BlockContainer>
          <Animator>
            <h3>What I&apos;ve done so far?</h3>
          </Animator>
          <Animator>
            <h2>My projects.</h2>
          </Animator>
          <Animator>
            <p>
              Some projects that I&apos;ve developed both individually and as a
              member of a team.
            </p>
          </Animator>

          <div className="cards-container">
            {projects.map((project, index) => {
              return (
                <CardImage key={index}>
                  <img src={project.image} alt={project.title} />
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <motion.div
                    style={{ marginTop: "15px" }}
                    className="box"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a href={project.url}>Ir al sitio</a>
                  </motion.div>
                </CardImage>
              );
            })}
          </div>
        </BlockContainer>
      </Element>
    </section>
  );
};
