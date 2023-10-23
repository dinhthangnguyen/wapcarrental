let renters = [
    {
        id: 1,
        name: "Vincent Nguyen",
        phone: "6412339636",
        billingAddress: "1001 N Main Street",
        email: "vincent@gmail.com",
        creditCard: 94356744561
      },
      {
        id: 2,
        name: "Steven N",
        phone: "414345545",
        billingAddress: "1002 N 4th Street",
        email: "gtran@miu.edu",
        creditCard: 94356754545
    },
    {
        id: 3,
        name: "Christ Cruise",
        phone: "9412338778",
        billingAddress: "123 W Burlington Avenue",
        email: "christc@hotmail.com",
        creditCard: 43456744561
    },
    {
        id: 4,
        name: "Adam Smiths",
        phone: "4123312312",
        billingAddress: "1000 Wapallo",
        email: "adams@hotmail.com",
        creditCard: 53563453455
    }
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

    static getRenterByEmailOrPhone(email) {
        let renter = renters.find(o => o.email.toLowerCase() === email.toLowerCase());
        if (renter) {
            return renter;
        } else {
           return renters.find(o => o.phone.toLowerCase() === email.toLowerCase());
        }
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