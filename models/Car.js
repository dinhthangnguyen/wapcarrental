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
        ],
        city: "Fairfield"
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
        ],
        city: "Fairfield"
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
            "616920_4.jpg"
        ],
        city: "Ottumwa"
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
        ],
        city: "Fairfield"
    },
    {
        id: 5,
        make: "Toyota",
        model: "RAV4",
        year: 2021,
        price: 110,
        ownerId: 616943,
        images: [
            "616943_1.jpg",
            "616943_2.jpg",
            "616943_3.jpg",
            "616943_4.jpg"
        ],
        city: "Ottumwa"
    },
    {
        id: 6,
        make: "Vinfast",
        model: "VF8 Electric",
        year: 2021,
        price: 110,
        ownerId: 616923,
        images: [
            "616923_1.jpg",
            "616923_2.jpg",
            "616923_3.jpg",
            "616923_4.jpg",
            "616923_5.jpg",
        ],
        city: "Mount Pleasant"
    },
    {
        id: 7,
        make: "Vinfast",
        model: "VF9 Electric",
        year: 2023,
        price: 90,
        ownerId: 616923,
        images: [
            "616923_6.jpg",
            "616923_7.jpg",
            "616923_8.jpg",
            "616923_9.jpg"
        ],
        city: "Mount Pleasant"
    },
    {
        id: 8,
        make: "Honda",
        model: "CRV",
        year: 2019,
        price: 70,
        ownerId: 616940,
        images: [
            "616940_6.jpg",
            "616940_7.jpg",
            "616940_8.jpg",
            "616940_9.jpg",
            "616940_10.jpg",
        ],
        city: "Fairfield"
    },
    {
        id: 9,
        make: "Tesla",
        model: "Model 3",
        year: 2019,
        price: 105,
        ownerId: 616901,
        images: [
            "616901_1.jpg",
            "616901_2.jpg",
            "616901_3.jpg",
            "616901_4.jpg",
            "616901_5.jpg",
        ],
        city: "Ottumwa"
    },
    {
        id: 10,
        make: "Tesla",
        model: "Model Y",
        year: 2019,
        price: 105,
        ownerId: 616901,
        images: [
            "616901_6.jpg",
            "616901_7.jpg",
            "616901_8.jpg",
            "616901_9.jpg",
        ],
        city: "Ottumwa"
    },
    {
        id: 11,
        make: "Honda",
        model: "Civic",
        year: 2015,
        price: 75,
        ownerId: 626944,
        images: [
            "616944_5.jpg",
            "616944_6.jpg",
            "616944_7.jpg"
        ],
        city: "Fairfield"
    },
];

class Car {
    constructor(id, make, model, year, price, ownerId, city) {
        this.id = id;
        this.make = make;
        this.year = year;
        this.price = price; // per day
        this.availableDates = [];
        this.billings = [];
        this.images = []
        this.ownerId = ownerId;
        this.city = city;
    }


    static getAllCars() {
        return cars;
    }

    static getMakesByCity(city) {
        let array = cars.filter(e => e.city.toLowerCase() == city.toLowerCase()).map(e => e.make);
        let makes = [...new Set(array)];
        makes.sort();
        return makes;
    }

    static getCities() {
        let cities = [...new Set(cars.map(e => e.city))];
        cities.sort();
        return cities;
    }

    static getModels(city, make) {
        console.log(city);

        let array = cars
        .filter(car => car.city.toLowerCase() === city.toLowerCase())
        .filter(car => car.make.toLowerCase() === make.toLowerCase())
        .map(e => e.model);

        console.log(array);
        let models = [... new Set(array)];
        models.sort();
        return models;
    }

    updateDates(dates) {
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