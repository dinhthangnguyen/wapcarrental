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
        console.log(billing);
        document.getElementById('make').value = billing.car.make;
        document.getElementById('model').value = billing.car.model;
        document.getElementById('year').value = billing.car.year;
        document.getElementById('price').value = `${"$"} ${billing.price}`;
        document.getElementById('city').value = billing.car.city;

        document.getElementById('orderNumber').value = billing.orderNumber;
        document.getElementById('total').value = billing.total;

        if(billing.status === 'Cancelled' || billing.status === 'Paid') {
            document.getElementById('bntPayment').setAttribute('class','btn btn-primary d-none');
            document.getElementById('btnCancel').setAttribute('class','btn btn-danger d-none');
        }


        // if(billing.status != 'Unpaid' || billing.status)
        //     document.getElementById('bntPayment').setAttribute('class','btn btn-primary d-none');
        // else
        //     document.getElementById('bntPayment').setAttribute('class','btn btn-primary');

        // if(billing.status != 'Unpaid' && billing.status != 'Paid')
        //     document.getElementById('btnCancel').setAttribute('class','btn btn-warning d-none');
        // else
        //     document.getElementById('btnCancel').setAttribute('class','btn btn-warning');
    }
}

document.getElementById('bntPayment').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];
    const isConfirmed = window.confirm("Are you sure you want to pay for this order?");
    if (isConfirmed) {
        payOrder(id);
    } else {
    }
})

async function payOrder(id) {
    let obj = { id};
    let setting = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(`/billings/api/pay/${id}`, setting);
    if (response.ok) {
        alert("Payment completed. Thank you!");
        location.reload();
    } else alert("Error " + response.status);
}

document.getElementById('btnCancel').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];
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
    let response = await fetch(`${serverUrl}/billings/api/cancel/${id}`, setting);
    if (response.ok) {
        alert("Cancel completed. Thank you!");
        location.reload();
    } else alert("Error " + response.status);
}

window.onload = loadData;