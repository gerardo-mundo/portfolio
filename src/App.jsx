import { About, Contact, Hero, Projects } from "./sections";

import { Container } from "./styles/style";

function App() {
  return (
    <Container>
      <Hero />
      <About />
      <Projects />
      <Contact />
      {/* <Final /> */}
    </Container>
  );
}

export default App;
