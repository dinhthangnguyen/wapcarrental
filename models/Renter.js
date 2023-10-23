let renters = [
    {
        id: 1,
        name: "Victor Senior",
        phone: "+1 941 233 9637",
        billingAddress: "1001 N Main Street",
        email: "dnguyen@miu.edu",
        creditCard: 94356744561
      },
      {
        id: 2,
        name: "Steven N",
        phone: "+1 941 434 5545",
        billingAddress: "1002 N 4th Street",
        email: "gtran@miu.edu",
        creditCard: 94356754545
    },
    {
        id: 3,
        name: "A Long",
        phone: "+1 941 233 8778",
        billingAddress: "1004N 4th Street",
        email: "achang@miu.edu",
        creditCard: 43456744561
    },
    {
        id: 4,
        name: "Jason Smiths",
        phone: "+1 941 233 12312",
        billingAddress: "1000 N 4th Street",
        email: "jasm@hotmail.com",
        creditCard: 53563453455
    },
    {
        id: 5,
        name: "Kayla Woods",
        phone: "+1 941 233 12312",
        billingAddress: "1000 N 4th Street",
        email: "kaylaw@gmail.com",
        creditCard: 5876734456
    },
    {
        id: 6,
        name: "Lanna Conner",
        phone: "+1 941 233 89078",
        billingAddress: "300 S Broadway Street",
        email: "lannac@gmail.com",
        creditCard: 6565464562
    },
    {
        id: 7,
        name: "Ke Huy Quan",
        phone: "+1 941 233 12234",
        billingAddress: "1000 N 4th Street",
        email: "george.ke@gmail.com",
        creditCard: 14385874985
    },
    {
        id: 8,
        name: "Maggie Q",
        phone: "+1 941 233 34523",
        billingAddress: "15 Wapello Street",
        email: "maggie.q@gmail.com",
        creditCard: 58678374905
    },
];

class Renter {
    constructor(id, name, phone, billingAddress, email, creditCard, license) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.billingAddress = billingAddress;
        this.email = email;
        this.creditCard = creditCard;
        this.license = license;        
    }

    static getById(id) {
        return renters.find(o => o.id === id);
    }

    static getRenterByEmail(email) {
        let renter = renters.find(o => o.email.toLowerCase() === email.toLowerCase());
        return renter;
    }

    static generateId() {
        let max = renters.map(o => o.id).reduce((a,b)=> {
            if (a > b) {
                return a;
            }
            return b;
        });
        return max +1;
    }
    

    create() {
        renters.push(this);
    }
    
}

module.exports = Renter;