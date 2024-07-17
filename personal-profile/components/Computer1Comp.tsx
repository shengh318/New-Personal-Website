import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ContactShadows,
  Stage,
} from "@react-three/drei";

import Computer1 from "../public/computer/Computer1";

export default function Computer1Comp() {
  return (
    <Canvas camera={{ fov: 75, position: [10, 15, 160] }}>
      <Stage environment="city" intensity={1} preset="rembrandt">
        <Suspense>
          <ambientLight intensity={0.5} />
          <OrbitControls enableZoom={false} />
          <Computer1 scale={[5, 5, 5]} />
          <ContactShadows position={[0, -0.8, 0]} rotation-x={Math.PI / 2} />
        </Suspense>
        <Environment preset="sunset" />
      </Stage>
    </Canvas>
  );
}
