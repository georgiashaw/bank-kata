import {Vehicle, Car, Train, Bus, Book} from '../scratch'

it('', () => {

    const rolls = new Car("Rolls Royce", "Phantom")
console.log(rolls.make)
rolls.accelerate()
})

it('Bus', () => {

let vehicle = new Car("Rolls Royce", "Phantom")
console.log(vehicle.make)
vehicle.accelerate()
vehicle = new Bus("London Bus", "Routemaster")
console.log(vehicle.make)
vehicle.accelerate()
})

it('Bus', () => {

    let vehicle: Vehicle = new Car("Rolls Royce", "Phantom")
    console.log(vehicle.make)
    vehicle.accelerate()
    vehicle = new Bus("London Bus", "Routemaster")
    console.log(vehicle.make)
    vehicle.accelerate()
    vehicle = new Train("Thomas", "Tank Engine")
    })

    it('', () => {

        const rolls = new Car("Rolls Royce", "Phantom")
    console.log(rolls.make)
    rolls.accelerate()
    })


    it.only('give it anything', () => {
        const peytonPlace = new Book('Peyton Place', 378943)
        console.log(peytonPlace.title)
        console.log(peytonPlace.catalogId)
        peytonPlace.printTitle()
    })
