// YOUR CODE HERE
class Car {
    constructor (make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }

    //Honk method that goes beep beep
    honk() {
        console.log("BEEP BEEP!")
    }

    //Timer method for performing maintenance
    performMaintenance() {
        setTimeout(function() {
            console.log("maintenance complete")
        }, 3000)
    }
}

//Instance of Car class
var mySweetRide = new Car('Pontiac', 'Fiero', 1988)

//Calls to honk() and performMaintenance()
mySweetRide.honk()
mySweetRide.performMaintenance()
