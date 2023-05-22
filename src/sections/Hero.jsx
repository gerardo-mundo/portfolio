import { motion } from "framer-motion";

import { Navbar } from "../components/Navbar";
import { FlexGrouper, Img, Left, Right, Section } from "../styles/style";

export const Hero = () => {
  return (
    <Section>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
        animate={{
          y: 0,
        }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <Navbar />
      </motion.div>
      <FlexGrouper>
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
      </FlexGrouper>
    </Section>
  );
};
