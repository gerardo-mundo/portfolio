import { CanvasContainer, FlexTop, Section } from "../styles/style";
import { Model3DCanvas } from "../components/Model3DCanvas";
import { Form } from "../components/Form";

export const Contact = () => {
  return (
    <Section>
      <FlexTop>
        <Form />
        <CanvasContainer>
          <Model3DCanvas />
        </CanvasContainer>
      </FlexTop>
    </Section>
  );
};
