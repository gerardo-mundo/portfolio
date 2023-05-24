import { motion } from "framer-motion";

import { BlockContainer, CardImage, CardsContainer } from "../styles/style";
import { projects } from "../utils/projects";
import { Element } from "react-scroll";

export const Projects = () => {
  return (
    <Element className="section" name="projects">
      <BlockContainer>
        <h3>¿Qué he hecho hasta ahora?</h3>
        <h2>Proyectos</h2>
        <p>
          Algunos proyectos que he desarrollado tanto de manera individual como
          en equipo, son los siguientes:
        </p>

        <CardsContainer>
          {projects.map((project, index) => {
            return (
              <CardImage key={index}>
                <img src={project.image} alt={project.title} />
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <motion.div
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
        </CardsContainer>
      </BlockContainer>
    </Element>
  );
};
