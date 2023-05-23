import { CanvasContainer, Section } from "../styles/style";
import { Model3DCanvas } from "../components/Model3DCanvas";

export const Final = () => {
  return (
    <Section>
      <h1>Text</h1>
      <CanvasContainer>
        <Model3DCanvas />
      </CanvasContainer>
    </Section>
  );
};
