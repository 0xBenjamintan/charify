import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Model(props) {
  const { nodes, materials } = useGLTF("/scene.gltf");
  //set for rotation
  const [rotation, setRotation] = React.useState(0);

  useFrame(() => {
    setRotation((oldRotation) => oldRotation + 0.01);
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.wire_027177027}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}
useGLTF.preload("/scene.gltf");

export default Model;
