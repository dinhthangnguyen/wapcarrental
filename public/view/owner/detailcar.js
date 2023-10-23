const serverUrl = 'http://localhost:3000';
async function loadData() {
    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[4];

    let response = await fetch(`${serverUrl}/cars/api/${id}`);
    if(response.ok){
        let car = await response.json();
        
        document.getElementById('make').value = car.make;
        document.getElementById('model').value = car.model;
        document.getElementById('year').value = car.year;
        document.getElementById('price').value = car.price;
        document.getElementById('city').value = car.city;

    }
}

document.getElementById('btnBack').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];
    window.location.href = `${serverUrl}/owners/${id}/cars`;
})

document.getElementById('btnUpdate').addEventListener("click", (event) => {

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
    let response = await fetch(`${serverUrl}/billings/api/confirm-pay/${id}`, setting);
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
    let response = await fetch(`${serverUrl}/billings/api/cancel/${id}`, setting);
    if (response.ok) {
        alert("Cancel completed. Thank you!");
        location.reload();
    } else alert("Error " + response.status);
}

window.onload = loadData;