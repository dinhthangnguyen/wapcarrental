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
        document.getElementById('creditCard').value = billing.renter.creditCard;
        document.getElementById('zip').value = billing.renter.zip;
        
        document.getElementById('make').value = billing.car.make;
        document.getElementById('model').value = billing.car.model;
        document.getElementById('year').value = billing.car.year;
        document.getElementById('price').value = billing.car.price;
        document.getElementById('city').value = billing.car.city;

        document.getElementById('orderNumber').value = billing.orderNumber;
        document.getElementById('total').value = billing.total;

        if(billing.status != 'Paid')
            document.getElementById('bntConfirmPayment').setAttribute('class','btn btn-primary d-none');
        else
            document.getElementById('bntConfirmPayment').setAttribute('class','btn btn-primary');

        if(billing.status != 'Unpaid' && billing.status != 'Paid')
            document.getElementById('btnCancel').setAttribute('class','btn btn-warning d-none');
        else
            document.getElementById('btnCancel').setAttribute('class','btn btn-warning');
    }
}

document.getElementById('btnBack').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];
    window.location.href = `http://localhost:3000/owners/${id}/manage-billing`;
})

document.getElementById('bntConfirmPayment').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[4];
    const isConfirmed = window.confirm("Are you sure you want to corfirm payment for this order?");
    if (isConfirmed) {
        confirmPayOrder(id);
    } else {
    }
})

async function confirmPayOrder(id) {
    let obj = { id};
    let setting = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(`http://localhost:3000/billings/api/confirm-pay/${id}`, setting);
    if (response.ok) {
        alert("Confirm Payment completed. Thank you!");
        location.reload();
    } else alert("Error " + response.status);
}

document.getElementById('btnCancel').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[4];
    const isConfirmed = window.confirm("Are you sure you want to cancel this order?");
    if (isConfirmed) {
        cancelOrder(id);
    } else {
    }
})

async function cancelOrder(id) {
    let obj = { id};
    let setting = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(`http://localhost:3000/billings/api/cancel/${id}`, setting);
    if (response.ok) {
        alert("Cancel completed. Thank you!");
        location.reload();
    } else alert("Error " + response.status);
}

window.onload = loadData;