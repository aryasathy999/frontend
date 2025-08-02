import React from 'react';
import styles from './utils/styles';

const tileSize = 1;

const Square = ({ position, color, onClick, isHighlight }) => (
  <mesh position={position} onClick={onClick} receiveShadow>
    <boxGeometry args={[tileSize, 0.1, tileSize]} />
    <meshStandardMaterial color={isHighlight ? styles.yellowHighlight : color} />
  </mesh>
);

export default Square;
