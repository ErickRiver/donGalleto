var icon = document.querySelector(".fa-lock");
function togglePassword() {
    var passwordField = document.getElementById("passwordField");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-lock");
        icon.classList.add("fa-unlock");
    } else {
        passwordField.type = "password";
        icon.classList.remove("fa-unlock");
        icon.classList.add("fa-lock");
    }
}