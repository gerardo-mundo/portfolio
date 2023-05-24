import { Element } from "react-scroll";
import { Footer, Model3DCanvas, Form } from "../components";
import {
  CanvasContainer,
  DisplayBlockContainer,
  FlexTop,
} from "../styles/style";

export const Contact = () => {
  return (
    <Element className="section" name="contact">
      <DisplayBlockContainer>
        <FlexTop>
          <CanvasContainer>
            <Model3DCanvas />
          </CanvasContainer>
          <Form />
        </FlexTop>
        <Footer />
      </DisplayBlockContainer>
    </Element>
  );
};
