/* eslint-disable */
import { observable, action, makeAutoObservable } from 'mobx'

export class GeneralStore {
    constructor() {
        this.name = '';
        this.numPeople = 0;

        makeAutoObservable(this, {
            name: observable,
            numPeople: observable,
            handleInput: action
        })
    }

    handleInput = (name, value) => {
        this[name] = value
    }
}
