const serverUrl = 'http://localhost:3000';
document.getElementById("btnSearch").addEventListener("click", async (event) => {
    // Prevent the default form submission behavior
    if (!document.getElementById('verify-form').checkValidity()) {
        return;
    }
    event.preventDefault();

    var orderNumber = document.getElementById("orderNumber").value;

    let response = await fetch(`${serverUrl}/billings/api/track-order/${orderNumber}`);
    if(response.ok){
        let billing = await response.json();
        window.location.href = `${serverUrl}/billings/${billing.id}`
    }
})