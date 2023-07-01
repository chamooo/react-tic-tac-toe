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
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                
            }
        }
    };

    const handleCellClick = (event) => {
        const cellIndex = event.target.getAttribute('data-index');
        setTurn((prev) => (prev === 1 ? 2 : 1));
        setField((prev) => {
            return prev.map((row, r_index) =>
                row.map((el, el_index) => (r_index + '' + el_index === cellIndex ? turn : el)),
            );
        });
        checkIsWin(field);
    };

    return (
        <div className="wrapper">
            <GameField field={field} handleCellClick={handleCellClick} isClicked={isClicked} />
        </div>
    );
}

export default App;
