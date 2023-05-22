import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Final } from "./sections/Final";
import { Hero } from "./sections/Hero";
import { Work } from "./sections/Work";
import { Container } from "./styles/style";

function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Work />
      <Contact />
      <Final />
    </Container>
  );
}

export default App;
