import React, { useState } from 'react';
import s from './styles.module.scss';
import Cell from '../Cell/Cell';

const GameField = ({ field, handleCellClick, isClicked }) => {
    return (
        <div className={s.field}>
            {field.map((row, r_index) =>
                row.map((el, el_index) => {
                    if (el === 1) {
                        return <Cell key={r_index + '' + el_index} role="X" />;
                    } else if (el === 2) {
                        return <Cell key={r_index + '' + el_index} role="O" />;
                    } else {
                        return (
                            <Cell
                                key={r_index + '' + el_index}
                                index={r_index + '' + el_index}
                                handleCellClick={handleCellClick}
                            />
                        );
                    }
                }),
            )}
        </div>
    );
};

export default GameField;
