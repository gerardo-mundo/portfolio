import { Element } from "react-scroll";
import { Model3DCanvas, Form } from "../components";

export const Contact = () => {
  return (
    <section className="section">
      <div className="flex-1">
        <Model3DCanvas />
      </div>
      <Element className="flex-2" name="contact">
        <Form />
      </Element>
    </section>
  );
};
