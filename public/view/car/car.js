const serverUrl = "http://localhost:3000";
let carID;
window.onload = async function () {
    let paths = window.location.pathname.split("/");
    carID = paths[paths.length - 1];

    let response = await fetch(`${serverUrl}/cars/api/${carID}`);
    if (response.ok) {
        let car = await response.json();
        console.log(car);
        loadUI(car);
    }
    else {
        alert("Error: something went wrong: " + response.status);
    }
}

function loadUI(car) {
    document.getElementById("carName").appendChild(document.createTextNode(`${car.make} ${car.model} ${car.year}`));
    document.getElementById("carDescription").appendChild(document.createTextNode(car.description ?? ""));
    document.getElementById("rentPrice").appendChild(document.createTextNode(`$US ${car.price}/day`));
    let leftGallery = document.getElementById("leftGallery");
    let rightGallery = document.getElementById("rightGallery");

    for (let i = 0; i < car.images.length; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", `/img/${car.images[i]}`);
        img.setAttribute("alt", `${car.model} image`);
        img.className = "w-100 shadow-1-strong rounded mb-4";

        if (i < car.images.length / 2) {
            leftGallery.appendChild(img);
        } else {
            rightGallery.appendChild(img);

        }
    }
}

document.getElementById("submit").addEventListener("click", async function (event) {
    event.preventDefault();
    let form = document.getElementById("form");

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let address = document.getElementById("addressInput").value;
    let license = document.getElementById("licenseInput").value;
    let phone = document.getElementById("phoneInput").value;
    let card = document.getElementById("cardInput").value;
    console.log(name, email, address, license, phone, card);
    let response = await fetch(`${serverUrl}/rent/api`, {
        method: "POST",
        body: JSON.stringify({ name, email, address, license, phone, card, carID }),
        headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
        let billing = await response.json();
        window.location.href = `/billings/detail${billing.id}`
    } else {
        alert("Error: something went wrong: " + response.status);
    }

})