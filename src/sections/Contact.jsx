import { Footer, Model3DCanvas, Form } from "../components";
import {
  CanvasContainer,
  DisplayBlockContainer,
  FlexTop,
  Section,
} from "../styles/style";

export const Contact = () => {
  return (
    <Section>
      <DisplayBlockContainer>
        <FlexTop>
          <CanvasContainer>
            <Model3DCanvas />
          </CanvasContainer>
          <Form />
        </FlexTop>
        <Footer />
      </DisplayBlockContainer>
    </Section>
  );
};
