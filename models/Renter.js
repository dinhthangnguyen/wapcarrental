let renters = [
    {
        id: 1,
        name: "Victor Senior",
        phone: "+1 941 233 9637",
        billingAddress: "1001 N Main Street",
        zip: 52557,
        email: "dnguyen@miu.edu",
        creditCard: 94356744561
      },
      {
        id: 2,
        name: "Alice Johnson",
        phone: "+1 123 456 7890",
        billingAddress: "1234 S Oak Street",
        zip: 54321,
        email: "alice@example.com",
        creditCard: 9876543210
      },
      {
        id: 3,
        name: "John Doe",
        phone: "+1 555 555 5555",
        billingAddress: "456 E Elm Street",
        zip: 67890,
        email: "john@example.com",
        creditCard: 1122334455
      },
      {
        id: 4,
        name: "Mary Smith",
        phone: "+1 987 654 3210",
        billingAddress: "789 W Willow Street",
        zip: 12345,
        email: "mary@example.com",
        creditCard: 9988776655
      },
      {
        id: 5,
        name: "David Brown",
        phone: "+1 333 333 3333",
        billingAddress: "101 N Pine Street",
        zip: 11111,
        email: "david@example.com",
        creditCard: 1122334455
      },
      {
        id: 6,
        name: "Emma White",
        phone: "+1 777 777 7777",
        billingAddress: "202 S Cedar Street",
        zip: 22222,
        email: "emma@example.com",
        creditCard: 9988776655
      },
      {
        id: 7,
        name: "Daniel Green",
        phone: "+1 444 444 4444",
        billingAddress: "303 E Birch Street",
        zip: 33333,
        email: "daniel@example.com",
        creditCard: 1122334455
      },
      {
        id: 8,
        name: "Sophia Black",
        phone: "+1 666 666 6666",
        billingAddress: "404 W Walnut Street",
        zip: 44444,
        email: "sophia@example.com",
        creditCard: 9988776655
      },
      {
        id: 9,
        name: "Christopher Lee",
        phone: "+1 222 222 2222",
        billingAddress: "505 N Maple Street",
        zip: 55555,
        email: "christopher@example.com",
        creditCard: 1122334455
      },
      {
        id: 10,
        name: "Olivia Davis",
        phone: "+1 888 888 8888",
        billingAddress: "606 S Oak Street",
        zip: 66666,
        email: "olivia@example.com",
        creditCard: 9988776655
      }
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