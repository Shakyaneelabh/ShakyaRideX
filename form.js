function validateForm(event) {
    event.preventDefault();

    let valid = true;

    // Full Name
    let name = document.getElementById("fullName").value.trim();

    if (name === "") {
        document.getElementById("fullName").classList.add("error-border");
        valid = false;
    } else {
        document.getElementById("fullName").classList.remove("error-border");
    }


    // Email
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        document.getElementById("email").classList.add("error-border");
        valid = false;
    } 
    else if (!email.match(emailPattern)) {
        document.getElementById("email").classList.add("error-border");
        valid = false;
    } 
    else {
        document.getElementById("email").classList.remove("error-border");
    }


    // Car
    let car = document.getElementById("car").value;

    if (car === "") {
        document.getElementById("car").classList.add("error-border");
        valid = false;
    } else {
        document.getElementById("car").classList.remove("error-border");
    }


    // Checkboxes
    let check1 = document.getElementById("check1");
    let check2 = document.getElementById("check2");
    let check3 = document.getElementById("check3");

    if (!check1.checked) {
        valid = false;
    }

    if (!check2.checked) {
        valid = false;
    }

    if (!check3.checked) {
        valid = false;
    }


    // If everything is correct
    if (valid) {

        document.body.innerHTML =
         "<div style='text-align:center; margin-top:100px; " +
        "background:#198754; color:white; height:100vh;'>" +
        "<h1>Form Submitted</h1>" +
        "<p>Your registration has been successfully submitted.</p>" +
        "</div>";
    } else {

        document.getElementById("message").style.display = "block";

        document.getElementById("message").innerHTML =
            "Please fill all required fields correctly.";
    }

    return false;
}