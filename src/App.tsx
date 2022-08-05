import React, { useEffect, useState } from 'react';
import './styles/app.css'
import { observer } from 'mobx-react-lite';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TablePage from './pages/TablePage';
import { fetchData } from './http/tableAPI';
import dataStore from './store/dataStore';

const App = () => {
  
    useEffect(() => {
      fetchData()
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/*' element={<Navigate to='/1' />} />
                <Route path='/:page' element={<TablePage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default observer (App);