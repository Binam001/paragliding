import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
// import { ParagliderModel } from "./ParagliderModel";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
// import { ParagliderModel } from "./ParagliderModel";
import { ParagliderModel } from "./Paraglider-orange";

interface ParagliderProps {
  progress: number;
  // Add a callback to pass the position up
  // setCameraPosition?: (position: THREE.Vector3) => void;
}

const CameraController = ({ progress }: ParagliderProps) => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

  const positions = [
    // new THREE.Vector3(14, 2, 3),
    new THREE.Vector3(10, 2, -4),
    new THREE.Vector3(8, 3, 0),
    new THREE.Vector3(8, 3, -3),
    new THREE.Vector3(8, 3, -3),
    // new THREE.Vector3(7, -2, -6),
    // new THREE.Vector3(9, 3, 6),

    // new THREE.Vector3(15, 3, -10),
    new THREE.Vector3(8, 3, -2),
    // new THREE.Vector3(9, 3, 6),
    new THREE.Vector3(9, 2, 4),

    new THREE.Vector3(9, 2, 4),
    new THREE.Vector3(8, 1, 6),

    new THREE.Vector3(8, 3, 5),
    new THREE.Vector3(7, 0, 2),
    new THREE.Vector3(8, 0, -3),
    // new THREE.Vector3(9, 0, 5),

    new THREE.Vector3(8, 0, -4),
    new THREE.Vector3(9, 0, -3),
    // new THREE.Vector3(7, 0, 5),
    // new THREE.Vector3(6, 0, 5),
    new THREE.Vector3(4, 1, 6),

    new THREE.Vector3(4, 1, 7),
    new THREE.Vector3(4, 3, 6),
    new THREE.Vector3(7, 0, 8),

    new THREE.Vector3(-1, 1, 8),
    new THREE.Vector3(-1, 1, 8),
    new THREE.Vector3(-1, 1, 8),
  ];
  useFrame(() => {
    cameraRef.current?.lookAt(0, 0, 0);
  });

  useEffect(() => {
    if (!cameraRef.current) return;

    const segmentCount = positions.length - 1;
    const segmentProgress = 1 / segmentCount;

    let segmentIndex = Math.floor(progress * segmentCount);
    segmentIndex = Math.min(segmentIndex, segmentCount - 1);
    const localProgress =
      (progress - segmentIndex * segmentProgress) / segmentProgress;

    const startPos = positions[segmentIndex];
    const endPos = positions[segmentIndex + 1];

    const newPos = startPos.clone().lerp(endPos, localProgress);

    cameraRef.current.position.copy(newPos);

    // Pass the position to the parent component
    // if (setCameraPosition) {
    //   setCameraPosition(cameraRef.current.position.clone());
    // }
  }, [progress, positions]);

  return (
    <PerspectiveCamera
      ref={cameraRef}
      fov={45}
      near={0.1}
      far={10000}
      makeDefault
      position={[8, 2, 3]}
    />
  );
};

const Paraglider = ({ progress }: ParagliderProps) => {
  // const [cameraPosition, setCameraPosition] = useState<THREE.Vector3 | null>(
  //   null
  // );
  return (
    <div className="w-full h-full relative pointer-events-none">
      {/* {cameraPosition && (
        <div className="fixed top-0 left-1/2 text-white bg-black p-2 rounded z-50">
          <p>Camera Position:</p>
          <p>x: {cameraPosition.x.toFixed(2)}</p>
          <p>y: {cameraPosition.y.toFixed(2)}</p>
          <p>z: {cameraPosition.z.toFixed(2)}</p>
        </div>
      )} */}
      <Canvas style={{ pointerEvents: "none" }}>
        <CameraController
          progress={progress}
          // setCameraPosition={setCameraPosition}
        />

        <ambientLight intensity={2} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={4}
          color={"#ffffff"}
        />

        {/* <ParagliderModel /> */}
        <ParagliderModel />
      </Canvas>
    </div>
  );
};

export default Paraglider;
