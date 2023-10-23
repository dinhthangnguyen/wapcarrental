let renters = [
    {
        id: 1,
        name: "Vincent Nguyen",
        phone: "+1 941 233 4233",
        billingAddress: "1001 N Main Street",
        email: "vin@gmail.com",
        creditCard: 94356744561,
        license: "5435AGR944"
      },
      {
        id: 2,
        name: "Steven N",
        phone: "+1 941 434 5545",
        billingAddress: "1002 N 4th Street",
        email: "gtran@miu.edu",
        creditCard: 94356754545,
        license: "565HWFR944"
    },
    {
        id: 3,
        name: "Christ Cruise",
        phone: "+1 941 233 8778",
        billingAddress: "123 W Burlington Avenue",
        email: "christc@hotmail.com",
        creditCard: 43456744561,
        license: "FHERTBV435"
    },
    {
        id: 4,
        name: "Adam Smiths",
        phone: "+1 941 233 12312",
        billingAddress: "1000 Wapallo",
        email: "adams@hotmail.com",
        creditCard: 53563453455,
        license: "PVJIJ59FJ5"
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