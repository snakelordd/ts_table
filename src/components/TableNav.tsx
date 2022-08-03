import React, { FC } from 'react';
import dataStore from '../store/dataStore';
import { IData } from '../types/types';

interface TableNavProps {

}
const TableNav:FC<TableNavProps> = () => {
    const pages: number[] = []
    
    for (let i = 1; i <= Math.ceil(dataStore.getData.length/10); i++) {
        pages.push(i)
    }

    console.log(pages)
    function pagination () {

    }
    return (
        <div className='tableNav'>
            <a className='navBtn'>Назад</a>
            <div >
                {pages.map(item => {
                    if (item === dataStore.getCurrentPage) {
                        return <a className='pagination currentPage' key={item}>{item}</a>
                    }
                    return <a className='pagination' key={item}>{item}</a>
                })}
            </div>
            <a className='navBtn'>Далее</a>
        </div>
    );
};

export default TableNav;