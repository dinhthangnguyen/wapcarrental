const serverUrl = 'http://localhost:3000';
const limit = 6;
async function loadData() {

    let response = await fetch(`${serverUrl}/cars/api/today-pick/${limit}`);
    if(response.ok){
        let cars = await response.json();
        let contentHTML = "";
        for(let car of cars){

            contentHTML = contentHTML.concat(`<div class="col-md-4">
                                                <div class="card mb-4 h-100 d-flex flex-column">
                                                    <img src="../../img/${car.images[0]}" class="card-img-top flex-grow-1" alt="${car.images[0]}">
                                                    <div class="card-body d-flex flex-column">
                                                        <h5 class="card-title">${car.make} ${car.model} ${car.year}</h5>
                                                        <p class="card-text">${car.description}</p>
                                                        <a href="/cars/${car.id}" class="btn btn-primary mt-auto">View Details</a>
                                                    </div>                                            
                                                </div>
                                            </div>`)
        }

        document.getElementById("today-pick").innerHTML = contentHTML;
    }

    let response2 = await fetch(`${serverUrl}/cars/api/affordable/${limit}`);
    if(response2.ok){
        let cars = await response2.json();
        let contentHTML = "";
        for(let car of cars){
            contentHTML = contentHTML.concat(`<div class="col-md-4">
                                                <div class="card mb-4 h-100 d-flex flex-column">
                                                    <img src="../../img/${car.images[0]}" class="card-img-top flex-grow-1" alt="${car.images[0]}">
                                                    <div class="card-body d-flex flex-column">
                                                        <h5 class="card-title">${car.make} ${car.model} ${car.year}</h5>
                                                        <p class="card-text">${car.description}</p>
                                                        <a href="/cars/${car.id}" class="btn btn-primary mt-auto">View Details</a>
                                                    </div>                                            
                                                </div>
                                            </div>`)
        }

        document.getElementById("affordable").innerHTML = contentHTML;
    }

    let response3 = await fetch(`${serverUrl}/cars/api/hot-pick/${limit}`);
    if(response3.ok){
        let cars = await response3.json();
        let contentHTML = "";
        for(let car of cars){
            contentHTML = contentHTML.concat(`<div class="col-md-4">
                                                <div class="card mb-4 h-100 d-flex flex-column">
                                                    <img src="../../img/${car.images[0]}" class="card-img-top flex-grow-1" alt="${car.images[0]}">
                                                    <div class="card-body d-flex flex-column">
                                                        <h5 class="card-title">${car.make} ${car.model} ${car.year}</h5>
                                                        <p class="card-text">${car.description}</p>
                                                        <a href="/cars/${car.id}" class="btn btn-primary mt-auto">View Details</a>
                                                    </div>                                            
                                                </div>
                                            </div>`)
        }

        document.getElementById("hot-pick").innerHTML = contentHTML;
    }
}

window.onload = loadData;




{/* <div class="col-md-4">
        <div class="card mb-4">
          <img src="../../img/616901_1.jpg" class="card-img-top" alt="Product 1">
          <div class="card-body">
            <h5 class="card-title">Product 1</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#" class="btn btn-primary">View Details</a>
          </div>
        </div>
      </div> */}

