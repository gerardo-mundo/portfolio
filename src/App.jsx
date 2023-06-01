import { Footer, Navbar } from "./components";
import { About, Contact, Hero, Projects } from "./sections";
import { Technologies } from "./sections/Technologies";

import { Container } from "./styles/style";

function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;
