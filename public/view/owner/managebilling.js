async function loadData() {
    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];

    let response = await fetch(`http://localhost:3000/owners/api/${id}/billings`);
    if(response.ok){
        let billings = await response.json();
        let bool = false;
        for (let billing of billings) {
            addRowToTable(id, billing, bool);
            bool = !bool;
        }
    }
}

document.getElementById('btnBack').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];
    window.location.href = `http://localhost:3000/owners/${id}`;
})

function addRowToTable(id, billing, color) {
    let row = document.createElement("tr");
    row.setAttribute("id", billing.id);
    row.addEventListener("click", () => {
        openDetail(id, billing.id);
    })
    row.className = color ? "table-success" : "table-secondary";
    let items = [`${billing.car.make} ${billing.car.model} ${billing.car.year}`,billing.renter.name,billing.orderNumber,billing.total, billing.status];
    for (item of items) {
        let col = document.createElement("td");
        col.appendChild(document.createTextNode(item));
        row.appendChild(col);
    }
    document.getElementById("tbody").appendChild(row);

}

function openDetail(id, billingId)  {
    window.location.href = `/owners/${id}/billings/${billingId}`
}

window.onload = loadData;