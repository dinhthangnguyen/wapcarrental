let cars = [];

class Car {
    constructor(id, make, model, year, price, ownerId) {
        this.id = id;
        this.make = make;
        this.year = year;
        this.price = price;
        this.availableDates = [];
        this.billings = [];
    }

    static getAllCars() {
        return cars;
    }

    updateDates (dates) {
        this.availableDates = dates;
    }

    createCar(car) {
        cars.push(car);
    }

     getAvailableDays() {
        return this.availableDates;
    }

    addBill(bill) {
        this.billings.push(bill);
    }

    getBill(id) {

    }

    getProfitByMonth(month) {

    }

}

module.exports = Car;