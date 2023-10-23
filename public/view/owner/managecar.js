const serverUrl = 'http://localhost:3000';
async function loadData() {
    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];

    let response = await fetch(`${serverUrl}/owners/api/${id}/cars`);
    if(response.ok){
        let cars = await response.json();
        let bool = false;
        for (let car of cars) {
            addRowToTable(id, car, bool);
            bool = !bool;
        }
    }
}

document.getElementById('btnBack').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];
    window.location.href = `${serverUrl}/owners/${id}`;
})

function addRowToTable(id, car, color) {
    let row = document.createElement("tr");
    row.setAttribute("id", car.id);
    row.addEventListener("click", () => {
        openCarDetail(id, car.id);
    })
    row.className = color ? "table-success" : "table-secondary";
    let{city,make,model,year, price}  = car;
    let items = [city,make,model,year, price];
    for (item of items) {
        let col = document.createElement("td");
        col.appendChild(document.createTextNode(item));
        row.appendChild(col);
    }
    document.getElementById("tbody").appendChild(row);

}

function openCarDetail(id, carId)  {
    window.location.href = `/owners/${id}/cars/${carId}`
}

document.getElementById('btnAdd').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];
    window.location.href = `${serverUrl}/owners/${id}/cars/add`;
})

window.onload = loadData;