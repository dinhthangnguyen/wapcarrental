async function loadData() {
    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];

    let response = await fetch(`http://localhost:3000/owners/api/${id}`);
    if(response.ok){
        let owner = await response.json();
        document.getElementById('email').value = owner.email;
        document.getElementById('name').value = owner.name;
        document.getElementById('phone').value = owner.phone;
        document.getElementById('billingAddress').value = owner.billingAddress;
        document.getElementById('creditCard').value = owner.creditCard;
        document.getElementById('zip').value = owner.zip;

    }
}

async function updateOwner(id, name, phone, billingAddress, zip, email, creditCard) {
let obj = { id, name, phone, billingAddress, zip, email, creditCard };
let setting = {
    method: "PUT",
    body: JSON.stringify(obj),
    headers: { "Content-Type": 'application/json' }
}
let response = await fetch(`http://localhost:3000/owners/api/${id}`, setting);
if (response.ok) {
    alert("Update Successfull");
} else alert("Error " + response.status);
}

document.getElementById('btnUpdate').addEventListener("click", () => {
    // Prevent the default form submission behavior
    if (!document.getElementById('verify-form').checkValidity()) {
        return;
    }
    event.preventDefault();

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];

    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let billingAddress = document.getElementById('billingAddress');
    let creditCard = document.getElementById('creditCard').value;
    let zip = document.getElementById('zip').value;

    updateOwner(id, name, phone, billingAddress, zip, email, creditCard);
})

window.onload = loadData;