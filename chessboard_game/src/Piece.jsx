import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const pieceHeight = 0.5;

const Piece = ({ position, color, selected, onClick }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (selected && meshRef.current) {
      meshRef.current.rotation.y += 0.03;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={onClick}
      castShadow
      receiveShadow
    >
      <cylinderGeometry args={[0.3, 0.3, pieceHeight, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Piece;
