const serverUrl = 'http://localhost:3000';
async function loadData() {
    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let params = paths.map(e=> Number(e)).filter(e => !!e)
    let id = params[0];
    let orderNumber = params[1];
    
    let response = await fetch(`${serverUrl}/billings/api/${id}/${orderNumber}`);

    if(response.ok){
        let billing = await response.json();
        document.getElementById('make').value = billing.car.make;
        document.getElementById('model').value = billing.car.model;
        document.getElementById('year').value = billing.car.year;
        document.getElementById('city').value = billing.car.city;

        document.getElementById('orderNumber').value = billing.orderNumber;
        document.getElementById('total').value = `${"$"} ${billing.total}`;
        document.getElementById('status').value = billing.status;
        document.getElementById('startDate').value =  new Date(billing.startDate).toLocaleDateString('en-US');
        document.getElementById('endDate').value = billing.endDate ? new Date(billing.endDate).toLocaleDateString('en-US') : "N/A";
        document.getElementById('price').value = billing.price;

        if(billing.status === 'Canceled' || billing.status === 'Paid') {
            document.getElementById('bntPayment').setAttribute('class','btn btn-primary d-none');
            document.getElementById('btnCancel').setAttribute('class','btn btn-danger d-none');
        }
    }
}

document.getElementById('bntPayment').addEventListener("click", (event) => {
    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let params = paths.map(e=> Number(e)).filter(e => !!e)
    let renterId = params[0];
    let billId = params[1];

    const isConfirmed = window.confirm("Are you sure you want to pay for this order?");
    if (isConfirmed) {
        payOrder(renterId,billId);
    } else {
    }
})

async function payOrder(renterId, billId) {
    let setting = {
        method: "POST",
        body: JSON.stringify({renterId,billId}),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(`/billings/api/pay`, setting);
    if (response.ok) {
        alert("Payment completed. Thank you!");
        location.reload();
    } else alert("Error " + response.status);
}

document.getElementById('btnCancel').addEventListener("click", (event) => {
    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let params = paths.map(e=> Number(e)).filter(e => !!e)
    let renterId = params[0];
    let billId = params[1];

    const isConfirmed = window.confirm("Are you sure you want to cancel this order?");
    if (isConfirmed) {
        cancelOrder(renterId,billId);
    } else {
    }
})

async function cancelOrder(renterId, billId) {
    let setting = {
        method: "POST",
        body: JSON.stringify({renterId,billId}),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(`${serverUrl}/billings/api/cancel`, setting);
    if (response.ok) {
        alert("Cancel completed. Thank you!");
        location.reload();
    } else alert("Error " + response.status);
}

window.onload = loadData;