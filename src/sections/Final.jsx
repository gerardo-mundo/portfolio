import { CanvasContainer, Section } from "../styles/style";
import { ComputerCanvas } from "../components/ComputerCanvas";

export const Final = () => {
  return (
    <Section>
      <h1>Text</h1>
      <CanvasContainer>
        <ComputerCanvas />
      </CanvasContainer>
    </Section>
  );
};
