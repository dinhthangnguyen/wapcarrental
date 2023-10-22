const serverUrl = "http://localhost:3000/cars/api";

window.onload = async function () {
    console.log("window onload");

    let response = await fetch(`${serverUrl}/cities`);
    if (response.ok) {
        let cities = await response.json();
        loadCities(cities);
    }
}
// load cities
function loadCities(cities) {
    let citySelect = document.getElementById("citySelect");
    for (let i = 0; i < cities.length; i++) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(cities[i]));
        option.setAttribute("id", cities[i]);
        citySelect.appendChild(option);
    }
    loadMakes(citySelect.value);
}

// load makes
document.getElementById("citySelect").addEventListener("change", () => {
    loadMakes(document.getElementById("citySelect").value);
});

async function loadMakes(city) {
    let response = await fetch(`${serverUrl}/makes?city=${city}`);
    if (response.ok) {
        let makes = await response.json();
        let makeSelect = document.getElementById("makeSelect");
        makeSelect.innerHTML = "";
        for (let i = 0; i < makes.length; i++) {
            let option = document.createElement("option");
            option.appendChild(document.createTextNode(makes[i]));
            option.setAttribute("id", makes[i]);
            makeSelect.appendChild(option);
        }
        loadModels(city, makeSelect.value);
    } else {
        alert("Error: something went wrong: " + response.status);
    }
}

document.getElementById("makeSelect").addEventListener("change", () => {
    let make = document.getElementById("makeSelect").value;
    let city = document.getElementById("citySelect").value;
    loadModels(city, make);
});

// load models
async function loadModels(city, make) {
    let response = await fetch(`${serverUrl}/models?city=${city}&make=${make}`);
    if (response.ok) {
        let models = await response.json();
        let modelSelect = document.getElementById("modelSelect");
        modelSelect.innerHTML = "";
        for (let i = 0; i < models.length; i++) {
            let option = document.createElement("option");
            option.appendChild(document.createTextNode(models[i]));
            option.setAttribute("id", models[i]);
            modelSelect.appendChild(option);
        }
        loadYears(city, make, modelSelect.value);
    } else {
        alert("Error: something went wrong: " + response.status);
    }
}

document.getElementById("modelSelect").addEventListener("change", () => {
    let make = document.getElementById("makeSelect").value;
    let city = document.getElementById("citySelect").value;
    let model = document.getElementById("modelSelect").value;
    loadYears(city, make, model);
});

async function loadYears(city, make, model) {
    let response = await fetch(`${serverUrl}/years?city=${city}&make=${make}&model=${model}`);
    if (response.ok) {
        let years = await response.json();
        let yearSelect = document.getElementById("yearSelect");
        yearSelect.innerHTML = "";
        for (let i = 0; i < years.length; i++) {
            let option = document.createElement("option");
            option.appendChild(document.createTextNode(years[i]));
            option.setAttribute("id", years[i]);
            yearSelect.appendChild(option);
        }
        loadCars(city,make,model,yearSelect.value);
    } else {
        alert("Error: something went wrong: " + response.status);
    }
}

// load cars
document.getElementById("yearSelect").addEventListener("change", () => {
    let make = document.getElementById("makeSelect").value;
    let city = document.getElementById("citySelect").value;
    let model = document.getElementById("modelSelect").value;
    let year = document.getElementById("yearSelect").value;
    loadCars(city, make, model, year);
});

async function loadCars(city, make, model, year) {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    let response = await fetch(`${serverUrl}?city=${city}&make=${make}&model=${model}&year=${year}`)
    if (response.ok) {
        let cars = await response.json();
        let bool = false;
        for (let car of cars) {
            addRowToTable(car, bool);
            bool = !bool;
        }

    } else {
        alert("Error: Something went wrong: " + response.status);
    }
}

function addRowToTable(car, color) {
    let row = document.createElement("tr");
    row.setAttribute("id", car.id);
    row.className = color ? "table-success" : "table-secondary";
    let{city,make,model,year, price}  = car;
    let items = [city,make,model,year, price];
    for (item of items) {
        let col = document.createElement("td");
        col.appendChild(document.createTextNode(item));
        row.appendChild(col);
    }
    document.getElementById("tbody").appendChild(row);

}