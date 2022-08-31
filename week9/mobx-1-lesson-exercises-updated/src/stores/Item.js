import { observable, makeObservable } from 'mobx'

export class Item {

    constructor(name) {
        this.name = name
        this.completed = false
        this.location = "Super Sell"

        makeObservable(this, {
            name: observable,
            completed: observable
        })
    }
}