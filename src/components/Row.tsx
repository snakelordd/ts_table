import React, { FC, ReactNode } from 'react';
import { IData } from '../types/types';

interface RowProps {
    data: IData
}
const Row:FC<RowProps> = ({data}) => {
    return (
        <tr key={data.id} className='tdRow'>
            <td className='tdId'>{data.id}</td>  
            <td>{data.title}</td>  
            <td>{data.body}</td>  
        </tr>
    );
};

export default Row;
