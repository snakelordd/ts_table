import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import TableNav from './components/TableNav';
import './styles/app.css'
import { IData } from './types/types';

import dataStore from './store/dataStore';
import { observer } from 'mobx-react-lite';
import axios from 'axios';

const App = () => {

  const [data, setData] = useState<IData[]>([])

  useEffect( () => {
    fetchData().then(() => {
      setData(dataStore.getData.slice((dataStore.getCurrentPage-1)*10, dataStore.getCurrentPage*10))
    })
    
  } , [])

  async function fetchData() {
    try {
      const response = await axios.get<IData[]>('https://jsonplaceholder.typicode.com/posts')
      console.log(response)
      dataStore.setData(response.data)
    } catch (e) {
      alert(e)
    }
  }
  
  return (
    <div>
      <Table data={data}/>
      <TableNav/>
    </div>
  );
};

export default observer (App);