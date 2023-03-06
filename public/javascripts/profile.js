function RedoPassword() {
    document.getElementById("inlogg").innerHTML = "YOU CLICKED ME!";
    console.log(klickad)
}

const forgotPasswordButton = document.getElementById("forgot-password");
const newPasswordInput = document.getElementById("new-password");

forgotPasswordButton.addEventListener("click", function() {
  newPasswordInput.style.display = "block";
});

