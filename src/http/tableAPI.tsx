import axios from "axios"
import dataStore from "../store/dataStore"
import { IData } from "../types/types"


export async function fetchData() {
    try {
      const response = await axios.get<IData[]>('https://jsonplaceholder.typicode.com/posts')
      dataStore.setData(response.data)
      dataStore.setMaxPage()
    } catch (e) {
      alert(e)
    }
  }