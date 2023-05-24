import { Element } from "react-scroll";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
//import { Final } from "./sections/Final";
import { Hero } from "./sections/Hero";
import { Work } from "./sections/Work";
import { Container } from "./styles/style";

function App() {
  return (
    <Container>
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Work />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      {/* <Final /> */}
    </Container>
  );
}

export default App;
