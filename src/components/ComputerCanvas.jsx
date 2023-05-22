import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CanvasLoader } from "./CanvasLoader";
import { OrbitControls, Preload } from "@react-three/drei";
import { Computer3D } from "./Computer3D";

export const ComputerCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 20, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer3D />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
