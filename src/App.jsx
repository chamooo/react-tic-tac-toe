import { useState } from 'react';
import './App.css';
import GameField from './components/GameField/GameField';

function App() {
    const [field, setField] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]);

    const [turn, setTurn] = useState(1);
    const [isClicked, setIsClicked] = useState(false);

    const checkIsWin = (matrix) => {
        const winningPatterns = [
            // rows
            [
                [0, 0],
                [0, 1],
                [0, 2],
            ],
            [
                [1, 0],
                [1, 1],
                [1, 2],
            ],
            [
                [2, 0],
                [2, 1],
                [2, 2],
            ],
            // columns
            [
                [0, 0],
                [1, 0],
                [2, 0],
            ],
            [
                [0, 1],
                [1, 1],
                [2, 1],
            ],
            [
                [0, 2],
                [1, 2],
                [2, 2],
            ],
            // diagonals
            [
                [0, 0],
                [1, 1],
                [2, 2],
            ],
            [
                [0, 2],
                [1, 1],
                [2, 0],
            ],
        ];

        for (const pattern of winningPatterns) {
            const [row1, col1] = pattern[0];
            const [row2, col2] = pattern[1];
            const [row3, col3] = pattern[2];

            if (
                matrix[row1][col1] !== 0 &&
                matrix[row1][col1] === matrix[row2][col2] &&
                matrix[row2][col2] === matrix[row3][col3]
            ) {
                return matrix[row1][col1];
            }
        }

        return null;
    };

    const handleCellClick = (event) => {
        const winner = checkIsWin(field);
        if (winner !== null) {
            alert(`Player ${winner} wins!`);
        }
        const cellIndex = event.target.getAttribute('data-index');
        setTurn((prev) => (prev === 1 ? 2 : 1));
        setField((prev) => {
            return prev.map((row, r_index) =>
                row.map((el, el_index) => (r_index + '' + el_index === cellIndex ? turn : el)),
            );
        });
    };

    return (
        <div className="wrapper">
            <GameField field={field} handleCellClick={handleCellClick} isClicked={isClicked} />
        </div>
    );
}

export default App;
