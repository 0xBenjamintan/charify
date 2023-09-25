import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("/scene-transformed.glb");
  // set for rotation
  const [rotation, setRotation] = React.useState([0, 0, 0]); // Initial rotation [x, y, z]

  useFrame(() => {
    // Update the Y-axis rotation (rotation on Y-axis)
    setRotation((oldRotation) => [0, oldRotation[1] + 0.01, 0]);
  });

  return (
    <group {...props} dispose={null} rotation={rotation}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.wire_027177027}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/scene-transformed.glb");
