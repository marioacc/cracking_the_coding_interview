const VehicleSize={
    motorcycle:"motorcycle",
    compact:"compact",
    large:"large",
}

class Vehicle{
    constructor(){
        this.parkingSpots = null;
        this.licensePlate = null;
        this.spotsNeeded = null;
    }

    getSportNeeded(){ return this.spotsNeeded}
    getSize(){}
    parkInSpot(){}
    clearSpot(){}
    canFitInSpot(){}
}

class Bus extends Vehicle{
    constructor(){
        this.size = VehicleSize.large;
        this.spotsNeeded = 5;
    }
    canFitInSpot(){}
}
class Car extends Vehicle{
    constructor(){
        this.size = VehicleSize.compact;
        this.spotsNeeded = 1;
    }
    canFitInSpot() {}
}
class Motorcycle extends Vehicle{
    constructor(){
        this.size = VehicleSize.motorcycle;
        this.spotsNeeded = 1;
    }
    canFitInSpot() {}
}

class ParkingLot {
    constructor(){
        this.levels = [];
        this.NUM_LEVELS = 5;
    }

    parkVehicle(){}
}

class Level{
    constructor(floor, numberSpots){
        this.floor = floor;
        this.availableSpots = numberSpots;
    }

    availableSpots(){}
    parkVehicle(){}
    parkStartingAtPoint(){}
    findAvailableSpot(){}
    spotFreed(){}
}

class ParkingSpot{
    constructor(level, row, number, vehicleSize){
        this.level = level;
        this.row = row;
        this.number = number;
        this.vehicleSize = vehicleSize;
    }

    isAvailable(){}
    canFitVehicle(){}
    park(){}
    getRow(){}
    getSpotNumber(){}
    removeVehicle(){}
}
