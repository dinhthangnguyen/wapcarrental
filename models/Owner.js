let owners = [
    {
        id: 1,
        name: "Dinh Thang Nguyen",
        phone: "+1 941 233 9637",
        billingAddress: "1000 N 4th Street",
        zip: 52557,
        email: "dnguyen@miu.edu"
    },
    {
        id: 2,
        name: "Giao Hieu Tran",
        phone: "+1 941 233 2323",
        billingAddress: "1000 N 4th Street",
        zip: 52557,
        email: "gtran@miu.edu"
    },
    {
        id: 3,
        name: "A Long Chang",
        phone: "+1 941 233 8778",
        billingAddress: "1000 N 4th Street",
        zip: 52557,
        email: "achang@miu.edu"
    },
    {
        id: 4,
        name: "Jason Smiths",
        phone: "+1 941 233 12312",
        billingAddress: "1000 N 4th Street",
        zip: 52501,
        email: "jasm@hotmail.com"
    },
    {
        id: 5,
        name: "Kayla Woods",
        phone: "+1 941 233 12312",
        billingAddress: "1000 N 4th Street",
        zip: 52501,
        email: "kaylaw@gmail.com"
    },
    {
        id: 6,
        name: "Lanna Conner",
        phone: "+1 941 233 89078",
        billingAddress: "300 S Broadway Street",
        zip: 52501,
        email: "lannac@gmail.com"
    },
    {
        id: 7,
        name: "Ke Huy Quan",
        phone: "+1 941 233 12234",
        billingAddress: "1000 N 4th Street",
        zip: 52641,
        email: "george.ke@gmail.com"
    },
    {
        id: 8,
        name: "Maggie Q",
        phone: "+1 941 233 34523",
        billingAddress: "15 Wapello Street",
        zip: 52501,
        email: "maggie.q@gmail.com"
    },
];

class Owner {
    constructor(id, name, phone, billingAddress, zip, email) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.billingAddress = billingAddress;
        this.zip = zip;
        this.email = email;
        this.cars = [];
        this.bills = [];
    }
    static getById(id) {
        return owners.find(o => o.id === id);
    }

    static getIdByEmail(email){
        let id;
        let owner = owners.find(o => o.email === email);
        if(owner)
            id = owner.id;
        return id;
    }

    create() {
        owners.push(this);
        return this;
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
    
    static getMaxId() {
        return owners.map(o => o.id).sort((a, b) => a - b).pop();
    }

    static removeById(id) {
        let index = owners.findIndex(o => o.id === id);
        let deletedOwner;
        if(index > -1){
            deletedOwner = owners[index];
            owners.splice(index, 1);
        }
        return deletedOwner;
    }
}

module.exports = Owner;