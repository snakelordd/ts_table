import { observer } from 'mobx-react-lite';
import React, { FC, useEffect, useState } from 'react';
import Search from '../components/Search';
import Table from '../components/Table';
import TableNav from '../components/TableNav';
import dataStore from '../store/dataStore';
import { IData } from '../types/types';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchData } from '../http/tableAPI';


type pageParams = {
    page: string;
}

const TablePage :FC = () => {
    const [data, setData] = useState<IData[]>([])
    const [seacrhValue, setSearchValue] = useState<string>('')
    const {page} = useParams<pageParams>()
    const navigate = useNavigate()

    let pageNumber: number 

    if (page) {
        pageNumber = +page
    }

    useEffect( () => {
        dataStore.setCurrentPage(pageNumber)
        setData(dataStore.getData.slice((dataStore.getCurrentPage-1)*10, dataStore.getCurrentPage*10))
    }, [page, dataStore.getMaxPage])
    
    const search = () => {
        if (!seacrhValue) {
            fetchData()
            return
        }
        const result = dataStore.getData.filter(
            item => item.id?.toString().includes(seacrhValue)
            || item.title.toLowerCase().includes(seacrhValue) 
            || item.body.toLowerCase().includes(seacrhValue)
        )
        dataStore.setData(result)
        dataStore.setMaxPage()
        setData(result.slice((dataStore.getCurrentPage-1)*10, dataStore.getCurrentPage*10))
        navigate('/1')
    }

    return (
        <div>
            <Search search={search} setValue={setSearchValue}></Search>
            <Table data={data}/>
            <TableNav/>
        </div>
    );
};

export default observer (TablePage);