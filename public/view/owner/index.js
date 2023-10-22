document.getElementById("owner-login").addEventListener("click", async (event) => {
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
    let response = await fetch("http://localhost:3000/owners/api/login", setting);
    if (response.ok) {
        if (response.redirected) {
        // The 'url' property contains the redirected URL
            window.location.href = response.url;
        }
    } else {
        console.log(response);
        document.getElementById('emailHelp').textContent = response.message;
    }
    } catch (error) {
    console.error('Fetch error:', error);
    }
})