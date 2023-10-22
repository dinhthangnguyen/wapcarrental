let owners = [
    {
        id: 616940,
        name: "Dinh Thang Nguyen",
        phone: "+1 941 233 9637",
        billingAddress: "1000 N 4th Street",
        zip: 52557,
        email: "dnguyen@miu.edu",
        creditCard: 94356744561
    },
    {
        id: 616944,
        name: "Giao Hieu Tran",
        phone: "+1 941 233 2323",
        billingAddress: "1000 N 4th Street",
        zip: 52557,
        email: "gtran@miu.edu",
        creditCard: 94356754545
    },
    {
        id: 616949,
        name: "A Long Chang",
        phone: "+1 941 233 8778",
        billingAddress: "1000 N 4th Street",
        zip: 52557,
        email: "achang@miu.edu",
        creditCard: 43456744561
    },
    {
        id: 616943,
        name: "Jason Smiths",
        phone: "+1 941 233 12312",
        billingAddress: "1000 N 4th Street",
        zip: 52501,
        email: "jasm@hotmail.com",
        creditCard: 53563453455
    },
    {
        id: 616920,
        name: "Kayla Woods",
        phone: "+1 941 233 12312",
        billingAddress: "1000 N 4th Street",
        zip: 52501,
        email: "kaylaw@gmail.com",
        creditCard: 5876734456
    },
    {
        id: 616901,
        name: "Lanna Conner",
        phone: "+1 941 233 89078",
        billingAddress: "300 S Broadway Street",
        zip: 52501,
        email: "lannac@gmail.com",
        creditCard: 6565464562
    },
    {
        id: 616923,
        name: "Ke Huy Quan",
        phone: "+1 941 233 12234",
        billingAddress: "1000 N 4th Street",
        zip: 52641,
        email: "george.ke@gmail.com",
        creditCard: 14385874985
    },
    {
        id: 616922,
        name: "Maggie Q",
        phone: "+1 941 233 34523",
        billingAddress: "15 Wapello Street",
        zip: 52501,
        email: "maggie.q@gmail.com",
        creditCard: 58678374905
    },
];

class Owner {
    constructor(id, name, phone, billingAddress, zip, email, creditCard) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.billingAddress = billingAddress;
        this.zip = zip;
        this.email = email;
        this.cars = [];
        this.bills = [];
    }

    addCar() {

    }

    removeCar() {

    }

    addBill() {

    }

    getAllOwner() {

    }

    static getById(id) {
        return owners.find(o => o.id === id);
    }

    getAllCars() {

    }

    getCarById() {

    }

    getBill = function (params) {

    }

    static getIdByEmail(email){
        let id;
        let owner = owners.find(o => o.email === email);
        if(owner)
            id = owner.id;
        return id;
    }

    update() {
        this.id = parseInt(this.id);
        let index = owners.findIndex(o => o.id === this.id);
        if(index > -1){
            owners.splice(index, 1, this);
            return this;
        }
        return this;
    }
}

module.exports = Owner;