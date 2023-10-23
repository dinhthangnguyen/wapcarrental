const serverUrl = 'http://localhost:3000';
async function registerOwner(name, phone, billingAddress, zip, email, creditCard) {
    let obj = { name, phone, billingAddress, zip, email, creditCard };
    let setting = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(`${serverUrl}/owners/api/`, setting);
    if (response.ok) {
        alert("Register Successfull");
        var newOwner = await response.json();
        window.location.href = `${serverUrl}/owners/${newOwner.id}/`
    } else alert("Error " + response.status);
}

document.getElementById('btnRegister').addEventListener("click", (event) => {
    // Prevent the default form submission behavior
    if (!document.getElementById('verify-form').checkValidity()) {
        return;
    }
    event.preventDefault();

    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let billingAddress = document.getElementById('billingAddress').value;
    let creditCard = document.getElementById('creditCard').value;
    let zip = document.getElementById('zip').value;

    registerOwner(name, phone, billingAddress, zip, email, creditCard);
})