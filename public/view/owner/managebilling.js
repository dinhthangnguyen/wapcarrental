async function loadData() {
    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];

    let response = await fetch(`http://localhost:3000/owners/api/${id}/billings`);
    if(response.ok){
        let billings = await response.json();
        const tableRows = billings.map(billing => `
        <tr id = ${billing.id}>
            <td>${billing.car.make} ${billing.car.model} ${billing.car.year}</td>
            <td>${billing.renter.name}</td>
            <td>${billing.orderNumber}</td>
            <td>${billing.total}</td>
            <td>${billing.status}</td>
            <td><a href ="/owners/billing/${billing.id}">View Detail</a></td>
        </tr>
        `).join('');

        document.getElementById('table-body').innerHTML = tableRows;
    }
}

document.getElementById('btnBack').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];
    window.location.href = `http://localhost:3000/owners/${id}`;
})

window.onload = loadData;