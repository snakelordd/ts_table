import { makeAutoObservable } from "mobx";
import { IData } from "../types/types";


class DataStore {
    _data: IData[] = [];
    _currentPage: number = 1
    _maxPage: number = 1

    constructor() {
      makeAutoObservable(this);
    }

    setData(data: IData[]) {
        this._data = data
    }

    setCurrentPage(page :number) {
        this._currentPage = page
    }

    setMaxPage() {
       this._maxPage = Math.ceil(this._data.length/10)
    }

    get getData() {
        return this._data
    }

    get getCurrentPage() {
        return this._currentPage
    }

    get getMaxPage() {
        return this._maxPage
    }
}

const dataStore = new DataStore
export default dataStore