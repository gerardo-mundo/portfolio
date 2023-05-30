/* eslint-disable react/prop-types */
import { Suspense } from "react";

import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { CanvasLoader } from "./CanvasLoader";
import { Ball3D } from "./Ball3D";

export const CanvasBall = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball3D imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
