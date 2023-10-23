const serverUrl = "http://localhost:3000";

document.getElementById("btnSearch").addEventListener("click", async function(event) {
    event.preventDefault();
    // Prevent the default form submission behavior
    let form = document.getElementById('form');

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    var email = document.getElementById("emailInput").value;
    let response = await fetch(`${serverUrl}/billings/api/track-email/${email}`);
    if(response.ok){
        let billings = await response.json();
        for (const bill of billings) {
            console.log(bill);
            addRowToTable(
                bill.orderNumber,
                bill.car.model,
                bill.startDate,
                bill.endDate,
                bill.total,
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
    document.getElementById("tbody").appendChild(row);
}