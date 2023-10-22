let renters = [
    {
        id: 1,
        name: "Victor Nguyen",
        phone: "+1 941 233 9637",
        billingAddress: "1001 N Main Street",
        zip: 52557,
        email: "dnguyen@miu.edu",
        creditCard: 94356744561
    },
    {
        id: 2,
        name: "Steven N",
        phone: "+1 941 434 5545",
        billingAddress: "1002 N 4th Street",
        zip: 52557,
        email: "gtran@miu.edu",
        creditCard: 94356754545
    },
    {
        id: 3,
        name: "A Long",
        phone: "+1 941 233 8778",
        billingAddress: "1004N 4th Street",
        zip: 52557,
        email: "achang@miu.edu",
        creditCard: 43456744561
    },
    {
        id: 4,
        name: "Jason Smiths",
        phone: "+1 941 233 12312",
        billingAddress: "1000 N 4th Street",
        zip: 52501,
        email: "jasm@hotmail.com",
        creditCard: 53563453455
    },
    {
        id: 5,
        name: "Kayla Woods",
        phone: "+1 941 233 12312",
        billingAddress: "1000 N 4th Street",
        zip: 52501,
        email: "kaylaw@gmail.com",
        creditCard: 5876734456
    },
    {
        id: 6,
        name: "Lanna Conner",
        phone: "+1 941 233 89078",
        billingAddress: "300 S Broadway Street",
        zip: 52501,
        email: "lannac@gmail.com",
        creditCard: 6565464562
    },
    {
        id: 7,
        name: "Ke Huy Quan",
        phone: "+1 941 233 12234",
        billingAddress: "1000 N 4th Street",
        zip: 52641,
        email: "george.ke@gmail.com",
        creditCard: 14385874985
    },
    {
        id: 8,
        name: "Maggie Q",
        phone: "+1 941 233 34523",
        billingAddress: "15 Wapello Street",
        zip: 52501,
        email: "maggie.q@gmail.com",
        creditCard: 58678374905
    },
];

class Renter {
    constructor(id, name, phone, billingAddress, zip, email, creditCard) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.billingAddress = billingAddress;
        this.zip = zip;
        this.email = email;
        this.creditCard = creditCard;
        this.bills = [];
    }

    static getById(id) {
        return renters.find(o => o.id === id);
    }

    static getCarsById(id) {
        return Car.getByOwnerId(id);
    }

    getCarById() {

    }

    getBill = function (params) {

    }

    static getIdByEmail(email){
        let id;
        let owner = renters.find(o => o.email === email);
        if(owner)
            id = owner.id;
        return id;
    }

    create() {
        renters.push(this);
        return this;
    }
    update() {
        this.id = parseInt(this.id);
        let index = renters.findIndex(o => o.id === this.id);
        if(index > -1){
            renters.splice(index, 1, this);
            return this;
        }
        return this;
    }
    
    static getMaxId() {
        return renters.map(o => o.id).sort((a, b) => a - b).pop();
    }

    static removeById(id) {
        let index = renters.findIndex(o => o.id === id);
        let deletedOwner;
        if(index > -1){
            deletedOwner = renters[index];
            renters.splice(index, 1);
        }
        return deletedOwner;
    }
}

module.exports = Renter;