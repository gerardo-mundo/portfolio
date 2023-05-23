import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CanvasLoader } from "./CanvasLoader";
import { OrbitControls, Preload } from "@react-three/drei";
import { Model3D } from "./Model3D";

export const Model3DCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      shadows="soft"
      dpr={[1, 2]}
      camera={{ position: [40, 40, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model3D />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
