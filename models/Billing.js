
let billings = [
    {
        id: 1,
        carId: 2,
        renterId: 1,
        orderNumber: "FH35DOOTO1",
        status: "Unpaid",
        price: 40,
        startDate: 1697914560000,
        endDate:"",
        total: 80,
    },
    {
        id: 2,
        carId: 3,
        renterId: 4,
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
        total: 0,
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
    },
    {
        id: 6,
        carId: 5,
        renterId: 1,
        orderNumber: "FH35DOOTD1",
        status: "Paid",
        price: 110,
        startDate: 1697914560000,
        endDate:1698000960000,
        total: 220,
    },
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
        let billing = billings.find(o => o.id === id);
        if (typeof billing != 'Billing') {
            let index = billings.findIndex(o => o.id === id);
            var { id, carId, renterId, orderNumber, status, startDate, endDate,price,total } = billing;
            billing = new Billing(id, carId, renterId, orderNumber, price);
            billing.status = status;
            billing.startDate = startDate;
            billing.endDate = endDate;
            billing.total = total;
            billings.splice(index, 1, billing);
        }
        return billing;
    }
    static getByOrderNumber(orderNumber) {
        return billings.find(o => o.orderNumber === orderNumber);
    }
  

    static getBillingsByRenterId(id) {
        return billings.filter(e => e.renterId === parseInt(id)).map(e => {
            return e;
        }).sort((e1,e2)=> {
            if (e1.startDate > e2.startDate) {
                return 1;
            } else if (e1.startDate < e2.startDate) {
                return -1;
            }
            return 0;
        });
    }

    static getBillingsByRenterIdAndOrderNumber(renterId, order) {
        let item = billings.filter(e => e.renterId === parseInt(renterId))
            .find(e => e.orderNumber.toUpperCase() === order.toUpperCase())
        return item;
    }

    static getBillingsByRenterIdAndOrderId(renterId, orderId) {
        let item = billings.filter(e => e.renterId === parseInt(renterId))
            .find(e => e.id === parseInt(orderId))
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
    static pay(renterId, billId) {
        let index = billings.findIndex(e=> {
            return e.renterId === parseInt(renterId) && e.id === parseInt(billId);
        })
        if (index === -1) {
            return;
        }
        
        billings[index].status = Billing.Status.Paid;
        billings[index].endDate = Date.now();
        let days = Math.ceil((billings[index].endDate - billings[index].startDate)/(24*3600*1000));
        billings[index].total = billings[index].price * (days <= 0 ? 1: days);
        return billings[index];
    }

    static cancelBill(renterId, billId) {
        let index = billings.findIndex(e=> {
            return e.renterId === parseInt(renterId) && e.id === parseInt(billId);
        })
        if (index === -1) {
            return;
        }
        
        billings[index].status = Billing.Status.Canceled;
        billings[index].endDate = Date.now();
        billings[index].total = 0;
        return billings[index];
    }

    create() {
        billings.push(this);
    }

    static getBillingsBycarIds(carIds){
        return billings.filter(o => carIds.indexOf(o.carId) > -1);
    }

    static countByCarId(carId){
        return billings.filter(o => o.carId === carId).length;
    }
}


module.exports = Billing;