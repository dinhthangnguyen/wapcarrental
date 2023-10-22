const serverUrl = "http://localhost:3000/cars/api";

window.onload = async function () {
    let paths = window.location.pathname.split("/");
    let carID = paths[paths.length - 1];

    let response = await fetch(`${serverUrl}/${carID}`);
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

        if (i <= car.images.length / 2) {
            leftGallery.appendChild(img);
        } else {
            rightGallery.appendChild(img);

        }
    }

}