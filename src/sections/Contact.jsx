import { CanvasContainer, FlexTop, Section } from "../styles/style";
import { Model3DCanvas } from "../components/Model3DCanvas";
import { Form } from "../components/Form";

export const Contact = () => {
  return (
    <Section>
      <FlexTop>
        <CanvasContainer>
          <Model3DCanvas />
        </CanvasContainer>
        <Form />
      </FlexTop>
    </Section>
  );
};
