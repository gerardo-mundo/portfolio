import { Element } from "react-scroll";
import { Model3DCanvas, Form } from "../components";
import { CanvasContainer } from "../styles/style";

export const Contact = () => {
  return (
    <section className="section">
      <Element name="contact">
        <CanvasContainer>
          <Model3DCanvas />
        </CanvasContainer>
      </Element>
      <Form />
    </section>
  );
};
