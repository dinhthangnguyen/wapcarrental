async function loadData() {
    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];

    let response = await fetch(`http://localhost:3000/owners/api/${id}/cars`);
    if(response.ok){
        let cars = await response.json();
        const tableRows = cars.map(car => `
        <tr id = ${car.id}>
            <td>${car.make}</td>
            <td>${car.model}</td>
            <td>${car.year}</td>
            <td>${car.price}</td>
            <td>${car.city}</td>
            <td><a href ="/cars/${car.id}">View Detail</a></td>
        </tr>
        `).join('');

        document.getElementById('table-body').innerHTML = tableRows;
    }
}

window.onload = loadData;