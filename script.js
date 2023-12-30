const PasswordButton = document.getElementById("PasswordBtn");
const PasswordInput = document.getElementById("password")

PasswordButton.addEventListener("click",function() {
    if(PasswordInput.type === "password") {
        PasswordInput.type = "text";
        PasswordButton.textContent = "Hide Password";
        PasswordButton.classList.remove("show-password");
        PasswordButton.classList.add("hide-password");
    }
    else {
        PasswordInput.type="password";
        PasswordButton.textContent = "Show Password"
        PasswordButton.classList.remove("hide-password");
        PasswordButton.classList.add("show-password");
    }
})