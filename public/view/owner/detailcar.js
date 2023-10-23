const serverUrl = 'http://localhost:3000';
async function loadData() {
    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[4];

    let response = await fetch(`${serverUrl}/cars/api/${id}`);
    if(response.ok){
        let car = await response.json();
        
        document.getElementById('make').value = car.make;
        document.getElementById('model').value = car.model;
        document.getElementById('year').value = car.year;
        document.getElementById('price').value = car.price;
        document.getElementById('city').value = car.city;
        
        let bool = false;
        for (let img of car.images) {
            addRowToTable(id, img, bool);
            bool = !bool;
        }
    }
}

document.getElementById('btnBack').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let ownerId = paths[2];
    window.location.href = `${serverUrl}/owners/${ownerId}/cars`;
})

async function updateCar(ownerId, id, make, model, year, price, city) {
    let obj = {ownerId, id, make, model, year, price, city};
    let setting = {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(`${serverUrl}/cars/api/${id}`, setting);
    if (response.ok) {
        alert("Update Successfull");
    } else alert("Error " + response.status);
}

async function deleteCar(ownerId, id) {
    let obj = { id };
    let setting = {
        method: "DELETE",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(`${serverUrl}/cars/api/${id}`, setting);
    if (response.ok) {
        alert("Delete Successfull");
        window.location.href = `${serverUrl}/owners/${ownerId}/cars`
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
    let id = paths[4];
    let ownerId = paths[2];
    let make = document.getElementById('make').value;
    let model = document.getElementById('model').value;
    let year = document.getElementById('year').value;
    let price = document.getElementById('price').value;
    let city = document.getElementById('city').value;

    updateCar(ownerId, id, make, model, year, price, city);
})

document.getElementById('btnDelete').addEventListener("click", (event) => {

    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[4];
    let ownerId = paths[2];
    const isConfirmed = window.confirm("Are you sure you want to delete your car?");
    if (isConfirmed) {
        deleteCar(ownerId, id);
    } else {
    }
    
})

function addRowToTable(id, img, color) {
    let row = document.createElement("tr");
    row.setAttribute("id", img);
    
    row.className = color ? "table-success" : "table-secondary";

    let col = document.createElement("td");
    col.appendChild(document.createTextNode(img));
    col.addEventListener("click", () => {
        showImagePreview(img);
    });
    row.appendChild(col);

    let col2 = document.createElement("td");
    let deleteImage = document.createElement("img");
    deleteImage.setAttribute('src',[window.location.origin, "img", 'delete-logo.png'].join("/"))
    deleteImage.addEventListener("click", () => {
        const isConfirmed = window.confirm("Are you sure you want to delete your account?");
        if (isConfirmed) {
            deleteImg(id, img);
        } else {
        }
    });
    deleteImage.style.width = '30px';
    col2.appendChild(deleteImage);
    row.appendChild(col2);
    document.getElementById("tbody").appendChild(row);

}

function showImagePreview(img) {
    const imagePreviewElement = document.getElementById('imagePreview');

    // Update the source of the image element
    imagePreviewElement.src = [window.location.origin, "img", img].join("/");
    imagePreviewElement.style.maxWidth = '100%';
    // Show the image preview
    imagePreviewElement.style.display = 'block';
}
async function deleteImg(id, img){
    let obj = { img };
    let setting = {
        method: "DELETE",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(`${serverUrl}/cars/api/${id}/images`, setting);
    if (response.ok) {
        alert("Delete Successfull");
        location.reload();
    } else alert("Error " + response.status);
}

document.getElementById('btnImageUpload').addEventListener("click", async (event) => {
    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];

    if (file) {
        try {
            const formData = new FormData();
            formData.append('image', file);

            const response = await fetch(`${serverUrl}/upload`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const responseData = await response.json();
                await addImg(responseData.fileName);
            } else {
                console.error('Error:', response.status);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    } else {
        console.log('No file selected.');
    }
})

async function addImg(img){
    const pathname = window.location.pathname;
    let paths = pathname.split("/");
    let id = paths[4];

    let obj = { img };
    let setting = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(`${serverUrl}/cars/api/${id}/images`, setting);
    if (response.ok) {
        alert("Add Successfull");
        location.reload();
    } else alert("Error " + response.status);
}

window.onload = loadData;