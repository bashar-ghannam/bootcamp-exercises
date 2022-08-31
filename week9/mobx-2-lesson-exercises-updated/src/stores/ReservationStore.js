import { makeObservable, observable } from 'mobx'


export class Reservation {
    constructor(name, numPeople) {
        this.name = name
        this.numPeople = numPeople
        //giving a random short string ID
        this.id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10)
        this.completed = false
        this.seated = false

        makeObservable(this, {
            name: observable,
            numPeople: observable,
            id: observable,
            completed: observable,
            seated: observable,
        })
    }
}