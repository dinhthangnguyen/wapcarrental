const serverUrl = 'http://localhost:3000';
async function loadData() {
    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[4];

    let response = await fetch(`${serverUrl}/billings/api/${id}`);
    if(response.ok){
        let billing = await response.json();
        document.getElementById('email').value = billing.renter.email;
        document.getElementById('name').value = billing.renter.name;
        document.getElementById('phone').value = billing.renter.phone;
        document.getElementById('billingAddress').value = billing.renter.billingAddress;
        
        document.getElementById('make').value = billing.car.make;
        document.getElementById('model').value = billing.car.model;
        document.getElementById('year').value = billing.car.year;
        document.getElementById('price').value = billing.price;
        document.getElementById('city').value = billing.car.city;
        document.getElementById('orderNumber').value = billing.orderNumber;
        document.getElementById('total').value = `${"$"} ${billing.total}`;
        document.getElementById('status').value = billing.status;
        console.log(billing.price);
    }
}

document.getElementById('btnBack').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];
    window.location.href = `${serverUrl}/owners/${id}/billings`;
})

window.onload = loadData;