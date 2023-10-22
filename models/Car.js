let cars = [
    {
        id: 1,
        make: "Toyota",
        model: "Prius",
        year: 2005,
        price: 50,
        ownerId: 626940,
        images: [
            "616940_1.jpg",
            "616940_2.jpg",
            "616940_3.jpg",
            "616940_4.jpg",
            "616940_5.jpg",
        ]
    },
    {
        id: 2,
        make: "Toyota",
        model: "Camry",
        year: 2012,
        price: 60,
        ownerId: 626944,
        images: [
            "616944_1.jpg",
            "616944_2.jpg",
            "616944_3.jpg",
            "616944_4.jpg",
            "616944_5.jpg",
        ]
    },
    {
        id: 3,
        make: "Honda",
        model: "Accord",
        year: 2023,
        price: 120,
        ownerId: 616920,
        images: [
            "616920_1.jpg",
            "616920_2.jpg",
            "616920_3.jpg",
            "616920_4.jpg",
            "616920_5.jpg",
        ]
    },
    {
        id: 4,
        make: "Toyota",
        model: "Corolla",
        year: 2018,
        price: 90,
        ownerId: 616949,
        images: [
            "616949_1.jpg",
            "616949_2.jpg",
            "616949_3.jpg",
            "616949_4.jpg",
            "616949_5.jpg",
        ]
    }

];

class Car {
    constructor(id, make, model, year, price, ownerId) {
        this.id = id;
        this.make = make;
        this.year = year;
        this.price = price; // per day
        this.availableDates = [];
        this.billings = [];
        this.images = []
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