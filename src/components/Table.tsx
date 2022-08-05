import React, { FC, ReactNode, useEffect, useState } from 'react';
import { IData } from '../types/types';
import Row from './Row';
import arrow from '../assets/arrowDown.svg'
import dataStore from '../store/dataStore';
import { observer } from 'mobx-react-lite';
import TableHeader from './TableHeader';


interface TableProps {
    data: IData[]
}

const Table :FC<TableProps> = ({data}) => {

    const [isAsc, setIsAsc] = useState(true)

    useEffect(() => initTable(), [])

    function initTable () {
        if (data.length < 10) {
            for ( let i = 0; i <= (10 - data.length); i++) {
                data.push({id: null, title: '', body: ''})
            }
        }
    }

    function sort (type: string) {
        setIsAsc(!isAsc)

        data.sort((a :IData, b :IData) => {
            switch (type) {
                case 'id': 
                    if (!a.id || !b.id) {
                        return 0
                    }
                    if (isAsc) {
                        return b.id - a.id 
                    }
                    return a.id - b.id
                case 'title':
                    if (a.title < b.title) {
                        if (isAsc) {
                            return -1
                        }
                        return 1
                    }
                    if (a.title > b.title) {
                        if (isAsc) {
                            return 1
                        }
                        return -1
                    }
                    return 0
                case 'body': 
                    if (a.body < b.body) {
                        if (isAsc) {
                            return -1
                        }
                        return 1
                    }
                    if (a.body > b.body) {
                        if (isAsc) {
                            return 1
                        }
                        return -1
                    }
                    return 0
            }
            return 0
        })
    }
    
    return (     
        <div className='table'>   
            <table >
                <colgroup>
                    <col className='col1'></col>
                    <col className='col2'></col>
                    <col className='col3'></col>
                </colgroup>
                <thead>
                    <TableHeader data={data} sort={sort} isAsc={isAsc} setIsAsc={setIsAsc}/>
                </thead>
                <tbody>
                {data.map(item => {
                    return (
                        <Row data={item} key={Math.random()}/>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default observer (Table);