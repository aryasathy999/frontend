import React, { useState } from 'react';
import Square from './Square';
import Piece from './Piece';
import styles from './utils/styles.js';

const ChessBoard = ({ chess, onMove }) => {
  const [selected, setSelected] = useState(null);
  const [highlightSquares, setHighlightSquares] = useState([]);
  const board = chess.board();

 const handleSquareClick = (x, y) => {
  const file = 'abcdefgh'[x];
  const rank = 8 - y;
  const square = `${file}${rank}`;

  if (selected) {
    const tempGame = new Chess(chess.fen());
    const move = tempGame.move({ from: selected, to: square, promotion: 'q' });

    if (move) {
      setSelected(null);
      setHighlightSquares([]);
      onMove(tempGame);
    } else {
      setSelected(null);
      setHighlightSquares([]);
    }
  } else {
    const piece = chess.get(square);
    if (piece) {
      setSelected(square);
      const moves = chess.moves({ square, verbose: true });
      setHighlightSquares(moves.map(m => m.to));
    }
  }
};

  return (
    <>
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => {
          const squareColor = (row + col) % 2 === 0 ? styles.lightTile : styles.darkTile;
          const file = 'abcdefgh'[col];
          const rank = 8 - row;
          const square = `${file}${rank}`;
          const highlight = highlightSquares.includes(square);

          return (
            <Square
              key={`square-${row}-${col}`}
              position={[col - 3.5, 0, row - 3.5]}
              color={squareColor}
              onClick={() => handleSquareClick(col, row)}
              isHighlight={highlight}
            />
          );
        })
      )}

      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          if (!cell) return null;
          const file = 'abcdefgh'[colIndex];
          const rank = 8 - rowIndex;
          const square = `${file}${rank}`;
          return (
            <Piece
              key={`piece-${rowIndex}-${colIndex}`}
              position={[colIndex - 3.5, 0.6, rowIndex - 3.5]}
              color={cell.color === 'w' ? styles.whitePiece : styles.blackPiece}
              selected={selected === square}
              onClick={() => handleSquareClick(colIndex, rowIndex)}
            />
          );
        })
      )}
    </>
  );
};

export default ChessBoard;
