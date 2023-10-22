let owners = [
    {
        id: 616940,
        name: "Dinh Thang Nguyen",
        phone: "+1 941 233 9637",
        address: "1000 N 4th Street",
        zip: 52557,
        email: "dnguyen@miu.edu"
    },
    {
        id: 616944,
        name: "Giao Hieu Tran",
        phone: "+1 941 233 2323",
        address: "1000 N 4th Street",
        zip: 52557,
        email: "gtran@miu.edu"
    },
    {
        id: 616949,
        name: "A Long Chang",
        phone: "+1 941 233 8778",
        address: "1000 N 4th Street",
        zip: 52557,
        email: "achang@miu.edu"
    },
    {
        id: 616943,
        name: "Jason Smiths",
        phone: "+1 941 233 12312",
        address: "1000 N 4th Street",
        zip: 52501,
        email: "jasm@hotmail.com"
    },
    {
        id: 616920,
        name: "Kayla Woods",
        phone: "+1 941 233 12312",
        address: "1000 N 4th Street",
        zip: 52501,
        email: "kaylaw@gmail.com"
    },
    {
        id: 616901,
        name: "Lanna Conner",
        phone: "+1 941 233 89078",
        address: "300 S Broadway Street",
        zip: 52501,
        email: "lannac@gmail.com"
    },
    {
        id: 616923,
        name: "Ke Huy Quan",
        phone: "+1 941 233 12234",
        address: "1000 N 4th Street",
        zip: 52641,
        email: "george.ke@gmail.com"
    },
    {
        id: 616922,
        name: "Maggie Q",
        phone: "+1 941 233 34523",
        address: "15 Wapello Street",
        zip: 52501,
        email: "maggie.q@gmail.com"
    },
];

class Owner {
    constructor(id, name, phone, address, zip, email) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.address = address;
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

    getOwnerById() {

    }

    getAllCars() {

    }

    getCarById() {

    }

    getBill = function (params) {

    }

    getIdByEmail(email){
        let id;
        let owner = owners.find(o => o.email === email);
        if(owner)
            id = owner.id;
        return id;
    }
}

module.exports = Owner;