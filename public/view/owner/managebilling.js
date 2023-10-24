const serverUrl = 'http://localhost:3000';
async function loadData() {
    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];

    let response = await fetch(`${serverUrl}/owners/api/${id}/billings`);
    if(response.ok){
        let billings = await response.json();
        for (let billing of billings) {
            addRowToTable(id, billing);
        }
    }
}

document.getElementById('btnBack').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];
    window.location.href = `${serverUrl}/owners/${id}`;
})

function addRowToTable(id, billing) {
    let row = document.createElement("tr");
    row.setAttribute("id", billing.id);
    row.addEventListener("click", () => {
        openDetail(id, billing.id);
    })

    if (billing.status === "Canceled") {
        row.className = "table-danger";
    } else if (billing.status === "Paid") {
        row.className = "table-success";
    } else {
        row.className = "table-secondary";
    }

    let items = [`${billing.car.make} ${billing.car.model} ${billing.car.year}`,billing.renter.name,billing.orderNumber,`${"$"}${billing.total}`, billing.status];
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