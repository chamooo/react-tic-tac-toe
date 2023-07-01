import React from 'react';
import s from './style.module.scss';

const Cell = ({ role, handleCellClick, index }) => {
    return (
        <div onClick={(e) => handleCellClick(e)} className={s.cell} data-index={index}>
            {role}
            {index}
        </div>
    );
};

export default Cell;
