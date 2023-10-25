const serverUrl = 'http://localhost:3000';
document.getElementById("btnlogin").addEventListener("click", async (event) => {
    // Prevent the default form submission behavior
    if (!document.getElementById('verify-form').checkValidity()) {
        return;
    }
    event.preventDefault();

    var email = document.getElementById("email").value;
    let obj = { email };
    let setting = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    try {
    let response = await fetch(`${serverUrl}/owners/api/login`, setting);
    if (response.ok) {
        if (response.redirected) {
            window.location.href = response.url;
        }
    } else {
        document.getElementById('emailHelp').textContent = response.message;
    }
    } catch (error) {
    console.error('Fetch error:', error);
    }
})

document.getElementById("btnregister").addEventListener("click", () =>{
    window.location.href = "/owners/register";
})