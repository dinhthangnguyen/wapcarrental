const serverUrl = 'http://localhost:3000';
async function loadData() {
    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];

    let response = await fetch(`${serverUrl}/owners/api/${id}`);
    if(response.ok){
        let owner = await response.json();
        document.getElementById('email').value = owner.email;
        document.getElementById('name').value = owner.name;
        document.getElementById('phone').value = owner.phone;
        document.getElementById('billingAddress').value = owner.billingAddress;
        document.getElementById('zip').value = owner.zip;

    }
}

async function updateOwner(id, name, phone, billingAddress, zip, email) {
    let obj = { id, name, phone, billingAddress, zip, email};
    let setting = {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(`${serverUrl}/owners/api/${id}`, setting);
    if (response.ok) {
        alert("Update Successfull");
    } else alert("Error " + response.status);
}

async function deleteOwner(id) {
    let obj = { id};
    let setting = {
        method: "DELETE",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(`${serverUrl}/owners/api/${id}`, setting);
    if (response.ok) {
        alert("Delete Successfull");
        window.location.href = `${serverUrl}/owners`
    } else alert("Error " + response.status);
}


document.getElementById('btnUpdate').addEventListener("click", (event) => {
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
    let billingAddress = document.getElementById('billingAddress').value;
    let zip = document.getElementById('zip').value;

    updateOwner(id, name, phone, billingAddress, zip, email);
})

document.getElementById('btnManagecar').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];
    window.location.href = `${serverUrl}/owners/${id}/cars`;
})

document.getElementById('btnManageBilling').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];
    window.location.href = `${serverUrl}/owners/${id}/billings`;
})

document.getElementById('btnDeleteAccount').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[2];
    const isConfirmed = window.confirm("Are you sure you want to delete your account?");
    if (isConfirmed) {
        deleteOwner(id);
    } else {
    }
    
})

window.onload = loadData;