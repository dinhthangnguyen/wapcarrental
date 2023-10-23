const serverUrl = 'http://localhost:3000';
// async function loadData() {
//     const pathname = window.location.pathname;
//     let paths = pathname.split("/");
//     let id = paths[4];

//     let response = await fetch(`${serverUrl}/cars/api/${id}`);
//     if(response.ok){
//         let car = await response.json();
        
//         document.getElementById('make').value = car.make;
//         document.getElementById('model').value = car.model;
//         document.getElementById('year').value = car.year;
//         document.getElementById('price').value = car.price;
//         document.getElementById('city').value = car.city;
        
//         let bool = false;
//         for (let img of car.images) {
//             addRowToTable(id, img, bool);
//             bool = !bool;
//         }
//     }
// }

document.getElementById('btnBack').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let ownerId = paths[2];
    window.location.href = `${serverUrl}/owners/${ownerId}/cars`;
})

document.getElementById('btnAdd').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let ownerId = paths[2];
    let make = document.getElementById('make').value;
    let model = document.getElementById('model').value;
    let year = document.getElementById('year').value;
    let price = document.getElementById('price').value;
    let city = document.getElementById('city').value;

    addCar(ownerId, make, model, year, price, city);
})

async function addCar(ownerId, make, model, year, price, city) {
    let obj = {ownerId, make, model, year, price, city};
    let setting = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(`${serverUrl}/cars/api`, setting);
    if (response.ok) {
        alert("Add Successfull");
        let newCar = await response.json();
        window.location.href = `${serverUrl}/owners/${newCar.ownerId}/cars/${newCar.id}`;
    } else alert("Error " + response.status);
}
