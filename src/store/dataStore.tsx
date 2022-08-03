import { makeAutoObservable } from "mobx";
import { IData } from "../types/types";


class DataStore {
    _data: IData[] = [];
    _currentPage: number = 1

    constructor() {
      makeAutoObservable(this);
    }

    setData(data: IData[]) {
        this._data = data
    }

    setCurrentPage(page :number) {
        this._currentPage = page
    }

    get getData() {
        return this._data
    }

    get getCurrentPage() {
        return this._currentPage
    }
}

const dataStore = new DataStore
export default dataStore