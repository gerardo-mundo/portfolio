import { useGLTF } from "@react-three/drei";

export const Computer3D = () => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[50, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        escale={1}
        position={[6, -2, -2]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
