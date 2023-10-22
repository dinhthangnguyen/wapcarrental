document.getElementById("btnSearch").addEventListener("click", async (event) => {
    // Prevent the default form submission behavior
    if (!document.getElementById('verify-form').checkValidity()) {
        return;
    }
    event.preventDefault();

    var orderNumber = document.getElementById("orderNumber").value;

    let response = await fetch(`http://localhost:3000/billings/api/track-order/${orderNumber}`);
    if(response.ok){
        let billing = await response.json();
        window.location.href = `http://localhost:3000/billings/detail/${billing.id}`
    }
})