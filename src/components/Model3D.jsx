/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Model3D = () => {
  const model3D = useGLTF("/stylized_planet/scene.gltf");

  const meshRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    meshRef.current.rotation.y = -elapsedTime * 0.3;
  });

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={0.6} groundColor="black" />
      <spotLight
        position={[50, 50, 10]}
        angle={0.7}
        penumbra={0.3}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <ambientLight intensity={0.3} />

      <pointLight intensity={0.5} />

      <primitive
        object={model3D.scene}
        scale={12}

        // position={[10, -4, -2]}
      />
    </mesh>
  );
};
