import { observer } from 'mobx-react-lite';
import React, { FC, useState } from 'react';
import { IData } from '../types/types';

interface TableHeaderProps {
    data: IData[]
    sort: (type :string) => void
    isAsc: boolean
    setIsAsc: (isArc: boolean) => void

}

const TableHeader :FC<TableHeaderProps> = ({data, sort}) => {
    return (
        <tr className='thRow'>
            <th onClick={() => sort('id')}>
                <div className='thead'>
                    <span>ID</span>
                    <div className='arrow' /> 
                </div>
            </th>
            <th onClick={() => sort('title')}> 
                <div className='thead'>
                    <span>Заголовок</span>
                    <div className='arrow' /> 
                </div>
            </th>
            <th onClick={() => sort('body')}>
                <div className='thead'>
                    <span>Описание</span>
                    <div className='arrow' /> 
                </div>
            </th>
        </tr>
    );
};

export default observer (TableHeader);