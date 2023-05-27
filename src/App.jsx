import { Footer, Navbar } from "./components";
import { About, Contact, Hero, Projects } from "./sections";

import { Container } from "./styles/style";

function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* <Final /> */}
    </Container>
  );
}

export default App;
