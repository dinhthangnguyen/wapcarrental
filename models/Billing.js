const Car = require('./Car')
const Renter = require('./Renter')

let billings = [
];

class Billing {
    static Status = {
        Unpaid: "Unpaid",
        Paid: "Paid",
        Closed: "Closed",
        Canceled: "Canceled"
    }
    constructor(id, carId, renterId, orderNumber, status) {
        this.id = id;
        this.carId = carId;
        this.renterId = renterId;
        this.orderNumber = orderNumber;
        this.status = status;
    }
    
    static getById(id){
        let billing = billings.find(o => o.id === id);
        this.getAddiontalInfo(billing);
        return billing;
    }
    static getByOrderNumber(orderNumber){
        return billings.find(o => o.orderNumber === orderNumber);
    }
    static getAddiontalInfo(billing){
        billing.car = Car.getById(billing.carId);
        billing.renter = Renter.getById(billing.renterId);
        billing.total = billing.car.price;
    }

    static generateId() {
        return 1;
    }

    static getByOwnerId(ownerId){
        let cars = Car.getByOwnerId(ownerId).map(o => o.id);
        let ownerBillings = billings.filter(o => cars.indexOf(o.carId) > -1);
        ownerBillings.forEach(o => this.getAddiontalInfo(o));
        return ownerBillings;
    }
    pay(){
        this.status = Billing.Status.Paid;
        return this;
    }
    confirmPay(){
        this.status = Billing.Status.Closed;
        return this;
    }
    cancelPay(){
        this.status = Billing.Status.Canceled;
        return this;
    }
    create(){
        billings.push(this);
    }
}


module.exports = Billing;