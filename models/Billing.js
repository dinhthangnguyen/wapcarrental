class Billing {
    constructor(id, car, renter, dates) {
        this.id = id;
        this.car = car;
        this.dates = dates;
        this.bill = dates * car.price; // should check again
    }
}