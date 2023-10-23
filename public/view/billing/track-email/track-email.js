const serverUrl = "http://localhost:3000";

document.getElementById("btnSearch").addEventListener("click", async function (event) {
    event.preventDefault();
    // Prevent the default form submission behavior
    let form = document.getElementById('form');

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    var email = document.getElementById("emailInput").value;
    let response = await fetch(`${serverUrl}/billings/api/track-email/${email}`);
    if (response.ok) {
        document.getElementById("tbody").innerHTML = "";
        let billings = await response.json();
        for (const bill of billings) {
            let endDate = bill.endDate ? new Date(bill.endDate).toLocaleDateString('en-US'): "N/A"
            addRowToTable(
                bill.orderNumber,
                `${bill.car.make} ${bill.car.model} ${bill.car.year}`,
                new Date(bill.startDate).toLocaleDateString('en-US'),
                endDate,
                `${"$"}${bill.total}`,
                bill.status
            )
        }
    } else {
        alert("Error: something went wrong: " + response.status)
    }
});

function addRowToTable(order, carname, start, stop, total, status) {
    let row = document.createElement("tr");
    for (const item of arguments) {
        let td = document.createElement("td");
        td.appendChild(document.createTextNode(item));
        row.appendChild(td);
    }
    if (status === "Canceled") {
        row.className = "table-danger";
    } else if (status === "Paid") {
        row.className = "table-success";
    } else {
        row.className = "table-secondary";
    }
    document.getElementById("tbody").appendChild(row);
}