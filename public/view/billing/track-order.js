const serverUrl = 'http://localhost:3000';
document.getElementById("btnSearch").addEventListener("click", async (event) => {
    event.preventDefault();

    // Prevent the default form submission behavior
    let form = document.getElementById('verify-form');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    var orderNumber = document.getElementById("orderNumber").value;
    var email = document.getElementById("emailInput").value;

    let response = await fetch(`${serverUrl}/billings/api/track-order/${email}/${orderNumber}`);
    if(response.ok){
        let billing = await response.json();
        window.location.href = `${serverUrl}/rent/${billing.renterId}/billing/${billing.id}`

    } else {
        alert("Error: something went wrong: " + response.statusText)
    }
})