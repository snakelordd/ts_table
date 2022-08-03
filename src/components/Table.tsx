import React, { FC, ReactNode } from 'react';
import { IData } from '../types/types';
import Row from './Row';


interface TableProps {
    data: IData[]
    children?: ReactNode
}

const Table :FC<TableProps> = ({data, children}) => {

    function initTable () {
        if (data.length < 10) {
            for ( let i = 0; i <= (10 - data.length); i++) {
                data.push({id: null, title: '', body: ''})
            }
        }
    }

    initTable()
    return (     
        <div className='table'>   
            <table >
                <colgroup>
                    <col className='col1'></col>
                    <col className='col2'></col>
                    <col className='col3'></col>
                </colgroup>
                <tr className='thRow'>
                    <th>ID<span className='line'></span></th>
                    <th> Заголовок</th>
                    <th>Описание</th>
                </tr>
                {data.map(item => {
                    return (
                        <Row data={item} />
                    )
                })}
            </table>
        </div>
    );
};

export default Table;