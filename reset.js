let button = document.getElementById("button");

button.addEventListener("click", function (e) {
    e.preventDefault();
    let newPassword = document.getElementById("new-password");
    let confirmPassword = document.getElementById("confirm-password");

    // const forgotPassword = document.querySelector("form");
    if (newPassword === confirmPassword) {
        alert("Successfully changed password!");
        document.getElementById("forgot").reset(); 
    } else {
        alert("Passwords do not match. Try again!");
    }
});