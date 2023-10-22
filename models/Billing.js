const Car = require('./Car')
const Renter = require('./Renter')

const Status = {
    Unpaid: "Unpaid",
    Paid: "Paid",
    Closed: "Closed",
    Canceled: "Canceled"
}
let billings = [
    {
        id: 1,
        carId: 2,
        renterId: 2,
        orderNumber: "FH35DOOTO1",
        status: Status.Unpaid
    },
    {
        id: 2,
        carId: 3,
        renterId: 5,
        orderNumber: "FG5GTWB3434",
        status: Status.Paid
    },
    {
        id: 3,
        carId: 2,
        renterId: 1,
        orderNumber: "0NGJKJ3HV1",
        status: Status.Canceled
    },
    {
        id: 3,
        carId: 3,
        renterId: 2,
        orderNumber: "KKTIKJ3HV1",
        status: Status.Closed
    },
    {
        id: 4,
        carId: 1,
        renterId: 6,
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
    static getByOwnerId(ownerId){
        let cars = Car.getByOwnerId(ownerId).map(o => o.id);
        let ownerBillings = billings.filter(o => cars.indexOf(o.carId) > -1);
        ownerBillings.forEach(o => this.getAddiontalInfo(o));
        return ownerBillings;
    }
}

module.exports = Billing;