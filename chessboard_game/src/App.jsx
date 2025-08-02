import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Chess } from 'chess.js';
import ChessBoard from './ChessBoard';

export default function App() {
  const [refresh, setRefresh] = useState(false);
  const [chess, setChess] = useState(() => new Chess());

  const onMove = (newGame) => {
    setChess(newGame);
  };

  return (
    <Canvas shadows camera={{ position: [0, 8, 10], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[5, 10, 7]}
        intensity={0.8}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <OrbitControls />
      <Suspense fallback={null}>
        <ChessBoard chess={chess} onMove={onMove} />
      </Suspense>
    </Canvas>
  );
}
