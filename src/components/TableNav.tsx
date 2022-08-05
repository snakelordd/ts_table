import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import dataStore from '../store/dataStore';

type pageParams = {
    page: string;
}

const TableNav:FC = () => {
    const pages: number[] = []
    const {page} = useParams<pageParams>()
    const navigate = useNavigate()


    const changeCurrentPage = (direction: string) => {
        let target
        if (!page) {
            return
        }
        if (direction === 'next') {
            target = +page+1
        }
        else {
            target = +page -1
        } 
        if ( target >= dataStore.getMaxPage) {
            target = dataStore.getMaxPage
        }
        if (target < 1) {
            target = 1
        }
        navigate('/' + target)  
    }

    for (let i = 1; i <= dataStore.getMaxPage; i++) {
        pages.push(i)
    }

    return (
        <div className='tableNav'>
            <a className='navBtn' onClick={ e => changeCurrentPage('prev')}>Назад</a>
            <div >
                {pages.map(item => {
                    if (item === dataStore.getCurrentPage) {
                        return <a className='pagination currentPage' key={item}>{item}</a>
                    }
                    return <Link to={'/' + item} className='pagination' key={item}>{item}</Link>
                })}
            </div>
            <a className='navBtn' onClick={ () => changeCurrentPage('next')}>Далее</a>
        </div>
    );
};

export default observer (TableNav);