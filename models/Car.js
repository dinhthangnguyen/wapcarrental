let cars = [
    {
        id: 1,
        make: "Toyota",
        model: "Prius",
        year: 2005,
        price: 50,
        ownerId: 1,
        images: [
            "616940_1.jpg",
            "616940_2.jpg",
            "616940_3.jpg",
            "616940_4.jpg",
            "616940_5.jpg",
        ],
        city: "Fairfield",
        available: false,
        description: "Clean hybrid efficent vehicle. 50 mpg. you save a lot of money and the renting price is cheapest here in Fairfield"
    },
    {
        id: 2,
        make: "Toyota",
        model: "Camry",
        year: 2012,
        price: 60,
        ownerId: 2,
        images: [
            "616944_1.jpg",
            "616944_2.jpg",
            "616944_3.jpg",
            "616944_4.jpg",
        ],
        city: "Fairfield",
        available: false,
        description: "Sleek and stylish, the 2012 Toyota Camry is a standout choice for your travel needs. With a modern design and reliable performance, this Camry offers a comfortable ride and excellent fuel efficiency. Affordable and available for rent in Fairfield, it's the perfect option for those seeking a combination of style and practicality."

    },
    {
        id: 3,
        make: "Honda",
        model: "Accord",
        year: 2023,
        price: 120,
        ownerId: 2,
        images: [
            "616920_1.jpg",
            "616920_2.jpg",
            "616920_3.jpg",
            "616920_4.jpg"
        ],
        city: "Ottumwa",
        available: true,
        description: "Experience luxury and performance with the 2023 Honda Accord. This latest model boasts cutting-edge features, a stunning design, and powerful performance on the road. Available for rent in Ottumwa, the 2023 Accord is perfect for those who appreciate the finer things in life and want to make a statement on the road."
    },
    {
        id: 4,
        make: "Toyota",
        model: "Corolla",
        year: 2018,
        price: 90,
        ownerId: 3,
        images: [
            "616949_1.jpg",
            "616949_2.jpg",
            "616949_3.jpg",
            "616949_4.jpg",
            "616949_5.jpg",
        ],
        city: "Fairfield",
        available: true,
        description: "Enjoy a smooth and comfortable ride with the 2018 Toyota Corolla. This well-maintained vehicle is both reliable and affordable, making it an excellent choice for your travels in Fairfield. With a sleek design and efficient fuel economy, the Corolla is a practical and stylish option for those looking for a hassle-free rental experience."
    },
    {
        id: 5,
        make: "Toyota",
        model: "RAV4",
        year: 2021,
        price: 110,
        ownerId: 4,
        images: [
            "616943_1.jpg",
            "616943_2.jpg",
            "616943_3.jpg",
            "616943_4.jpg"
        ],
        city: "Ottumwa",
        available: true,
        description: "Embark on your journey with the 2021 Toyota RAV4, a versatile and reliable SUV. With its modern design and advanced features, the RAV4 is perfect for both city driving and off-road adventures. Available for rent in Ottumwa, this SUV offers a comfortable and spacious interior, making it an ideal choice for families and adventurers alike."
    },
    {
        id: 6,
        make: "Vinfast",
        model: "VF8 Electric",
        year: 2021,
        price: 110,
        ownerId: 5,
        images: [
            "616923_1.jpg",
            "616923_2.jpg",
            "616923_3.jpg",
            "616923_4.jpg",
            "616923_5.jpg",
        ],
        city: "Mount Pleasant",
        available: true,
        description: "The statement of Vietnam technology prowness. First Southeast Asian car exported to the US. Modern, electric and sexy design."
    },
    {
        id: 7,
        make: "Vinfast",
        model: "VF9 Electric",
        year: 2023,
        price: 90,
        ownerId: 6,
        images: [
            "616923_6.jpg",
            "616923_7.jpg",
            "616923_8.jpg",
            "616923_9.jpg"
        ],
        city: "Mount Pleasant",
        available: true,
        description: "Discover the innovative Vinfast VF9 Electric, a futuristic electric vehicle designed for sustainability and performance. With a sleek and modern design, this electric car offers an eco-friendly driving experience. Available for rent in Mount Pleasant, the VF9 Electric is perfect for those who appreciate cutting-edge technology and want to contribute to a greener future."

    },
    {
        id: 8,
        make: "Honda",
        model: "CRV",
        year: 2019,
        price: 70,
        ownerId: 7,
        images: [
            "616940_6.jpg",
            "616940_7.jpg",
            "616940_8.jpg",
            "616940_9.jpg",
            "616940_10.jpg",
        ],
        city: "Fairfield",
        available: true,
        description: "Navigate the streets with confidence in the 2019 Honda CRV. This reliable and spacious SUV is well-suited for both city driving and long trips. Available for rent in Fairfield, the CRV offers a comfortable interior, advanced safety features, and a stylish design. Enjoy a smooth and enjoyable driving experience with this versatile and practical SUV."
    },
    {
        id: 9,
        make: "Tesla",
        model: "Model 3",
        year: 2019,
        price: 105,
        ownerId: 8,
        images: [
            "616901_1.jpg",
            "616901_2.jpg",
            "616901_3.jpg",
            "616901_4.jpg",
            "616901_5.jpg",
        ],
        city: "Ottumwa",
        available: true,
        description: "Embrace the future of automotive technology with the 2019 Tesla Model 3. This electric car offers a combination of performance, style, and efficiency. With a sleek design and cutting-edge features, the Model 3 is available for rent in Ottumwa. Experience the thrill of electric driving and contribute to a sustainable future with this high-tech Tesla."
    },
    {
        id: 10,
        make: "Tesla",
        model: "Model Y",
        year: 2019,
        price: 105,
        ownerId: 9,
        images: [
            "616901_6.jpg",
            "616901_7.jpg",
            "616901_8.jpg",
            "616901_9.jpg",
        ],
        city: "Ottumwa",
        available: true,
        description: "Experience the versatility of the 2019 Tesla Model Y, a compact electric SUV designed for modern living. With an innovative design and advanced technology, the Model Y offers a spacious interior and impressive performance. Available for rent in Ottumwa, this electric SUV is perfect for those who seek a balance of style, efficiency, and environmental consciousness."
    },
    {
        id: 11,
        make: "Honda",
        model: "Civic",
        year: 2015,
        price: 75,
        ownerId: 10,
        images: [
            "616944_5.jpg",
            "616944_6.jpg",
            "616944_7.jpg"
        ],
        city: "Fairfield",
        available: true,
        description: "Experience the versatility of the 2019 Tesla Model Y, a compact electric SUV designed for modern living. With an innovative design and advanced technology, the Model Y offers a spacious interior and impressive performance. Available for rent in Ottumwa, this electric SUV is perfect for those who seek a balance of style, efficiency, and environmental consciousness."
    },
];


class Car {
    static #all = "All";

    constructor(id, make, model, year, price, ownerId, city, description) {
        this.id = id;
        this.make = make;
        this.year = year;
        this.model = model;
        this.price = price; // per day
        this.available = true;
        this.billings = [];
        this.images = []
        this.ownerId = ownerId;
        this.city = city;
        this.description = description;
    }

    static getCities() {
        let cities = [...new Set(cars.filter(e => e.available).map(e => e.city))];
        cities.push(this.#all);
        cities.sort();
        return cities;
    }

    static getMakesByCity(city) {
        let array = cars
            .filter(car => car.available)

            .filter(e => {
                if (city.toLowerCase() == this.#all.toLowerCase()) {
                    return true;
                }
                return e.city.toLowerCase() === city.toLowerCase()
            }).map(e => e.make);
        let makes = [...new Set(array)];
        makes.push(this.#all);
        makes.sort();
        return makes;
    }


    static getModels(city, make) {
        let array = cars
            .filter(car => car.available)
            .filter(car => {
                if (city.toLowerCase() == this.#all.toLowerCase()) {
                    return true;
                }
                return car.city.toLowerCase() === city.toLowerCase()
            })
            .filter(car => {
                if (make.toLowerCase() == this.#all.toLowerCase()) {
                    return true;
                }
                return car.make.toLowerCase() === make.toLowerCase()
            })
            .map(e => e.model);
        let models = [... new Set(array)];
        models.sort();
        models.splice(0, 0, this.#all);
        return models;
    }

    static getYears(city, make, model) {
        let array = cars
            .filter(car => car.available)
            .filter(car => {
                if (city.toLowerCase() == this.#all.toLowerCase()) {
                    return true;
                }
                return car.city.toLowerCase() === city.toLowerCase()
            })
            .filter(car => {
                if (make.toLowerCase() == this.#all.toLowerCase()) {
                    return true;
                }
                return car.make.toLowerCase() === make.toLowerCase()
            })
            .filter(car => {
                if (model.toLowerCase() == this.#all.toLowerCase()) {
                    return true;
                }
                return car.model.toLowerCase() === model.toLowerCase()
            })
            .map(e => e.year);

        let years = [... new Set(array)];
        years.sort();
        years.splice(0, 0, this.#all);
        return years;
    }

    static getCars(city, make, model, year) {
        let array = cars
            .filter(car => car.available)
            .filter(car => {
                if (city.toLowerCase() === this.#all.toLowerCase()) {
                    return true;
                }
                return car.city.toLowerCase() === city.toLowerCase()
            })
            .filter(car => {
                if (make.toLowerCase() === this.#all.toLowerCase()) {
                    return true;
                }
                return car.make.toLowerCase() === make.toLowerCase()
            })
            .filter(car => {
                if (model.toLowerCase() === this.#all.toLowerCase()) {
                    return true;
                }
                return car.model.toLowerCase() === model.toLowerCase()
            })
            .filter(car => {
                if (String(year.toLowerCase()) === this.#all.toLowerCase()) {
                    return true;
                }
                return String(car.year) === year;
            });

        array.sort((a1, a2) => {
            if (a1.price > a2.price) {
                return 1;
            }
            else if (a1.price < a2.price) {
                return -1;
            }
            return 0;
        })
        return array;
    }

    static getCar(id) {
        return cars.find(e => String(e.id) === String(id));
    }

    createCar(car) {
        cars.push(car);
    }

    create() {
        cars.push(this);
        return this;
    }
    update() {
        this.id = parseInt(this.id);
        this.ownerId = parseInt(this.ownerId);
        let index = cars.findIndex(o => o.id === this.id);
        if(index > -1){
            cars.splice(index, 1, this);
            return this;
        }
        return this;
    }
    
    static getMaxId() {
        return cars.map(o => o.id).sort((a, b) => a - b).pop();
    }

    static removeById(id) {
        let index = cars.findIndex(o => o.id === id);
        let deletedCar;
        if(index > -1){
            deletedCar = cars[index];
            cars.splice(index, 1);
        }
        return deletedCar;
    }

    static removeImgById(id, img) {
        let car = cars.find(o => o.id === id);
        if(car){
            let deleteImg = car.images.findIndex(o => o === img);
            car.images.splice(deleteImg, 1);
        }
        return car;
    }
    static addImgById(id, img) {
        let car = cars.find(o => o.id === id);
        if(car){
            car.images.push(img);
        }
        return car;
    }

    addBill(bill) {
        this.billings.push(bill);
    }

    static getByOwnerId(ownerId) {
        return cars.filter(o => o.ownerId === ownerId);
    }
    static getById(id){
        return cars.find(o => o.id === id);
    }

    static getTodayPicks(limit) {
        return cars.filter(car => car.available).slice(0, limit);
    }

    static getAffordables(limit) {
        let array = cars
            .filter(car => car.available);
            
        array = array.sort((a1, a2) => {
            if (a1.price > a2.price) {
                return 1;
            }
            else if (a1.price < a2.price) {
                return -1;
            }
            return 0;
        }).slice(0, limit);
        return array;
    }
    static getAvailable(){
        return cars.filter(car => car.available);
    }
}

module.exports = Car;