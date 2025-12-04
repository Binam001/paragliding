import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ParagliderModel } from "./ParagliderModel";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

interface ParagliderProps {
  progress: number;
}

// --- Camera Animation Data ---
// const cameraPositions = [
//   new THREE.Vector3(14, 2, 3),
//   new THREE.Vector3(8, 1, 6),
//   new THREE.Vector3(7, -2, -3),
//   new THREE.Vector3(7, 4, -6),

//   new THREE.Vector3(15, 3, -10),
//   new THREE.Vector3(6, 5, 4),
//   new THREE.Vector3(2, 0, 15),

//   new THREE.Vector3(9, 0, 7),
//   new THREE.Vector3(10, 0, 0),
//   new THREE.Vector3(3, 0, 7),

//   new THREE.Vector3(0, 0, 7),
//   new THREE.Vector3(3, 0, 7),
//   new THREE.Vector3(3, 0, 7),

//   new THREE.Vector3(3, 0, 7),
//   new THREE.Vector3(3, 0, 7),
//   new THREE.Vector3(3, 0, 7),
// ];

// const CameraController = ({ progress }: ParagliderProps) => {
//   const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

//   useFrame(() => {
//     cameraRef.current?.lookAt(0, 0, 0);
//   });

//   useEffect(() => {
//     if (!cameraRef.current) return;

//     const segmentCount = cameraPositions.length - 1;
//     const segmentProgress = 1 / segmentCount;

//     let segmentIndex = Math.floor(progress * segmentCount);
//     segmentIndex = Math.min(segmentIndex, segmentCount - 1);
//     const localProgress =
//       (progress - segmentIndex * segmentProgress) / segmentProgress;

//     const startPos = cameraPositions[segmentIndex];
//     const endPos = cameraPositions[segmentIndex + 1];

//     const newPos = startPos.clone().lerp(endPos, localProgress);

//     cameraRef.current.position.copy(newPos);

//     // console.log(cameraRef.current.position);
//   }, [progress]);

//   return (
//     <PerspectiveCamera
//       ref={cameraRef}
//       fov={45}
//       near={0.1}
//       far={10000}
//       makeDefault
//       position={[8, 2, 3]}
//     />
//   );
// };

// --- Model Animation Data ---
// Example: A simple bank and turn animation
const modelPositions = [
  new THREE.Vector3(-10, 0, -5),
  new THREE.Vector3(0, 0, -8),
  new THREE.Vector3(0.5, 0.1, 0),
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(10, 0, 0),
];

const modelRotations = [
  new THREE.Euler(0, 0, 0),
  new THREE.Euler(0, 0, -0.2), // Bank left
  new THREE.Euler(0, -0.5, 0.3), // Turn right and bank
  new THREE.Euler(0, 0, 0), // Level out
];

const AnimatedModel = ({ progress }: ParagliderProps) => {
  const groupRef = useRef<THREE.Group>(null!);

  useEffect(() => {
    if (!groupRef.current) return;

    // --- Position Animation ---
    const posSegmentCount = modelPositions.length - 1;
    const posSegmentProgress = 1 / posSegmentCount;
    let posSegmentIndex = Math.floor(progress * posSegmentCount);
    posSegmentIndex = Math.min(posSegmentIndex, posSegmentCount - 1);
    const posLocalProgress =
      (progress - posSegmentIndex * posSegmentProgress) / posSegmentProgress;
    const startPos = modelPositions[posSegmentIndex];
    const endPos = modelPositions[posSegmentIndex + 1];
    groupRef.current.position.copy(
      startPos.clone().lerp(endPos, posLocalProgress)
    );
    console.log(groupRef.current.position);

    // --- Rotation Animation ---
    const rotSegmentCount = modelRotations.length - 1;
    const rotSegmentProgress = 1 / rotSegmentCount;
    let rotSegmentIndex = Math.floor(progress * rotSegmentCount);
    rotSegmentIndex = Math.min(rotSegmentIndex, rotSegmentCount - 1);
    const rotLocalProgress =
      (progress - rotSegmentIndex * rotSegmentProgress) / rotSegmentProgress;
    const startRot = modelRotations[rotSegmentIndex];
    const endRot = modelRotations[rotSegmentIndex + 1];

    // Convert Euler rotations to Quaternions for smooth interpolation
    const startQuaternion = new THREE.Quaternion().setFromEuler(startRot);
    const endQuaternion = new THREE.Quaternion().setFromEuler(endRot);

    // Interpolate between the quaternions
    // Set the group's quaternion to the start and slerp to the end
    groupRef.current.quaternion
      .copy(startQuaternion)
      .slerp(endQuaternion, rotLocalProgress);
  }, [progress]);

  return (
    <group ref={groupRef}>
      <ParagliderModel />
    </group>
  );
};

const Paraglider = ({ progress }: ParagliderProps) => {
  return (
    <div className="w-full h-full pointer-events-none!">
      <Canvas className="pointer-events-none!">
        {/* <CameraController progress={progress} /> */}

        <ambientLight intensity={2} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={4}
          color={"#ffffff"}
        />
        {/* <axesHelper args={[500]} /> */}

        <AnimatedModel progress={progress} />
      </Canvas>
    </div>
  );
};

export default Paraglider;
