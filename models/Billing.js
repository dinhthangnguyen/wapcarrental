const Car = require('./Car')
const Renter = require('./Renter')

const Status = {
    Unpaid: 1,
    Paid: 2,
    Closed: 3,
    Canceled: 4
}
let billings = [
    {
        id: 1,
        carId: 2,
        renterId: 2,
        orderNumber: "FH35DOOTO1"
    },
    {
        id: 2,
        carId: 2,
        renterId: 2,
        orderNumber: "FG5GTWB3434"
    },
    {
        id: 3,
        carId: 2,
        renterId: 2,
        orderNumber: "0NGJKJ3HV1"
    },
    {
        id: 4,
        carId: 2,
        renterId: 2,
        orderNumber: "54FGHPO485"
    },
]

class Billing {
    constructor(id, carId, renterId, orderNumber) {
        this.id = id;
        this.carId = carId;
        this.renterId = renterId;
        this.orderNumber = orderNumber;
        this.status = Status.Unpaid;
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
}

module.exports = Billing;