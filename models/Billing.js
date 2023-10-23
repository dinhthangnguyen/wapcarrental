const Car = require('./Car');
const Renter = require('./Renter');

let billings = [
    {
        id: 1,
        carId: 2,
        renterId: 2,
        orderNumber: "FH35DOOTO1",
        status: "Unpaid",
        price: 40,
        startDate: Date.now(),
        endDate: Date.now(),
        total: 80,
    },
    {
        id: 2,
        carId: 3,
        renterId: 5,
        orderNumber: "FG5GTWB3434",
        status: "Paid",
        price: 40,
        startDate: Date.now(),
        endDate: Date.now(),
        total: 80,
    },
    {
        id: 3,
        carId: 2,
        renterId: 1,
        orderNumber: "0NGJKJ3HV1",
        status: "Canceled",
        price: 40,
        startDate: Date.now(),
        endDate: Date.now(),
        total: 80,
    },
    {
        id: 4,
        carId: 3,
        renterId: 2,
        orderNumber: "KKTIKJ3HV1",
        status: "Paid",
        price: 40,
        startDate: Date.now(),
        endDate: Date.now(),
        total: 80,
    },
    {
        id: 5,
        carId: 1,
        renterId: 4,
        orderNumber: "54FGHPO485",
        status: "Unpaid",
        price: 40,
        startDate: Date.now(),
        endDate: Date.now(),
        total: 80,
    }
]
class Billing {
    static Status = {
        Unpaid: "Unpaid",
        Paid: "Paid",
        Canceled: "Canceled"
    }
    constructor(id, carId, renterId, orderNumber, price) {
        this.id = id;
        this.carId = carId;
        this.renterId = renterId;
        this.orderNumber = orderNumber;
        this.status = Billing.Status.Unpaid;
        this.startDate = Date.now();
        this.endDate = "";
        this.price = price;
        this.total = price;
    }

    static getById(id) {
        console.log(billings);
        let billing = billings.find(o => o.id === id);
        if (typeof billing != 'Billing') {
            let index = billings.findIndex(o => o.id === id);
            var { id, carId, renterId, orderNumber, status } = billing;
            billing = new Billing(id, carId, renterId, orderNumber, status);
            billings.splice(index, 1, billing);
        }
        console.log(billings);
        this.getAddiontalInfo(billing);
        return billing;
    }
    static getByOrderNumber(orderNumber) {
        return billings.find(o => o.orderNumber === orderNumber);
    }
    static getAddiontalInfo(billing) {
        billing.car = Car.getById(billing.carId);
        billing.renter = Renter.getById(billing.renterId);
        // TODO: this is wrong
        billing.total = billing.car.price;
    }

    static getBillingsByRenterId(id) {
        return billings.filter(e => e.renterId === parseInt(id)).map(e => {
            this.getAddiontalInfo(e);
            return e;
        });
    }

    static getBillingsByRenterIdAndOrderNumber(renterId, order) {
        let item = billings.filter(e => e.renterId === parseInt(renterId))
            .find(e => e.orderNumber.toUpperCase() === order.toUpperCase())
        if (item) {
            this.getAddiontalInfo(item);
        }
        return item;
    }

    static getBillingsByRenterIdAndOrderId(renterId, orderId) {
        let item = billings.filter(e => e.renterId === parseInt(renterId))
            .find(e => e.id === parseInt(orderId))
        if (item) {
            this.getAddiontalInfo(item);
        }
        return item;
    }

    static generateId() {
        let max = billings.map(o => o.id).reduce((a, b) => {
            if (a > b) {
                return a;
            }
            return b;
        });
        return max + 1;
    }

    static getByOwnerId(ownerId) {
        let cars = Car.getByOwnerId(ownerId).map(o => o.id);
        let ownerBillings = billings.filter(o => cars.indexOf(o.carId) > -1);
        ownerBillings.forEach(o => this.getAddiontalInfo(o));
        return ownerBillings;
    }
    pay() {
        this.status = Billing.Status.Paid;
        this.endDate = Date.now();
        return this;
    }
    cancelPay() {
        this.status = Billing.Status.Canceled;
        this.endDate = Date.now();
        return this;
    }
    create() {
        billings.push(this);
    }
}


module.exports = Billing;