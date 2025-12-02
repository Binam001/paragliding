import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ParagliderModel } from "./ParagliderModel";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

interface ParagliderProps {
  progress: number;
}

const CameraController = ({ progress }: ParagliderProps) => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

  const positions = [
    new THREE.Vector3(14, 2, 3),
    new THREE.Vector3(8, 1, 6),
    new THREE.Vector3(7, -2, -3),
    new THREE.Vector3(7, 4, -6),

    new THREE.Vector3(15, 3, -10),
    new THREE.Vector3(6, 5, 4),
    new THREE.Vector3(2, 0, 15),

    new THREE.Vector3(9, 0, 7),
    new THREE.Vector3(10, 0, 0),
    new THREE.Vector3(3, 0, 7),

    new THREE.Vector3(0, 0, 7),
    new THREE.Vector3(3, 0, 7),
    new THREE.Vector3(3, 0, 7),

    new THREE.Vector3(3, 0, 7),
    new THREE.Vector3(3, 0, 7),
    new THREE.Vector3(3, 0, 7),

    // new THREE.Vector3(3, 0, 7),
    // new THREE.Vector3(3, 0, 7),
    // new THREE.Vector3(3, 0, 7),

    // new THREE.Vector3(3, 0, 7),
    // new THREE.Vector3(3, 0, 7),
    // new THREE.Vector3(3, 0, 7),

    // new THREE.Vector3(3, 0, 7),
    // new THREE.Vector3(3, 0, 7),
    // new THREE.Vector3(3, 0, 7),
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

    console.log(cameraRef.current.position);
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
  return (
    <div className="w-full h-full pointer-events-none!">
      <Canvas className="pointer-events-none!">
        <CameraController progress={progress} />

        <ambientLight intensity={2} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={4}
          color={"#ffffff"}
        />
        {/* <axesHelper args={[500]} /> */}

        <ParagliderModel />
      </Canvas>
    </div>
  );
};

export default Paraglider;
