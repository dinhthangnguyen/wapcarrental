const serverUrl = "http://localhost:3000";

window.onload = async function() {
    console.log("window onload"); 

    let response = await fetch(`${serverUrl}/cars/cities`);
    if (response.ok) {
        let cities = await response.json();
        console.log(cities);
        loadCities(cities);
    }
}
// load cities
function loadCities(cities) {
    let citySelect = document.getElementById("citySelect");
    for(let i = 0;i< cities.length;i++) {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(cities[i]));
        option.setAttribute("id", cities[i]);
        citySelect.appendChild(option);
    }
    loadMakes(citySelect.value);
}

// load makes
document.getElementById("citySelect").addEventListener("change",()=> {
    loadMakes(document.getElementById("citySelect").value);
});

async function loadMakes(city) {
    let response = await fetch(`${serverUrl}/cars/makes?city=${city}`);
    if (response.ok) {
        let makes = await response.json();
        let makeSelect = document.getElementById("makeSelect");
        makeSelect.innerHTML = "";
        for(let i = 0;i< makes.length;i++) {
            let option = document.createElement("option");
            option.appendChild(document.createTextNode(makes[i]));
            option.setAttribute("id", makes[i]);
            makeSelect.appendChild(option);
        }
    } else {
        alert("Error: something went wrong: " + response.status);
    }
    
}