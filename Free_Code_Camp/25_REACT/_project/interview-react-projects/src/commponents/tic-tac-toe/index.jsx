import "./styles.css";
import { useState } from "react";

const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function calculateWinner(squares) {
    for (const [first, second, third] of winningLines) {
        if (
            squares[first] &&
            squares[first] === squares[second] &&
            squares[first] === squares[third]
        ) {
            return squares[first];
        }
    }

    return null;
}

export default function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill(""));
    const [isXTurn, setIsXTurn] = useState(true);

    const winner = calculateWinner(squares);
    const isDraw = !winner && squares.every((square) => square !== "");
    const status = winner
        ? `Winner: ${winner}`
        : isDraw
          ? "Draw"
          : `Next player: ${isXTurn ? "X" : "O"}`;

    function handleClick(index) {
        if (squares[index] || winner || isDraw) {
            return;
        }

        const nextSquares = [...squares];
        nextSquares[index] = isXTurn ? "X" : "O";
        setSquares(nextSquares);
        setIsXTurn((turn) => !turn);
    }

    function handleReset() {
        setSquares(Array(9).fill(""));
        setIsXTurn(true);
    }

    return (
        <div className="tic-tac-toe-container">
            <h2 aria-live="polite">{status}</h2>
            {[0, 1, 2].map((row) => (
                <div className="row" key={row}>
                    {[0, 1, 2].map((column) => {
                        const index = row * 3 + column;
                        return (
                            <button
                                className="square"
                                type="button"
                                key={index}
                                onClick={() => handleClick(index)}
                                aria-label={`Square ${index + 1}${squares[index] ? `: ${squares[index]}` : ""}`}
                                disabled={Boolean(squares[index]) || Boolean(winner) || isDraw}
                            >
                                {squares[index]}
                            </button>
                        );
                    })}
                </div>
            ))}
            <button type="button" onClick={handleReset}>
                <p>Reset Game</p>
            </button>
        </div>
    );
}
