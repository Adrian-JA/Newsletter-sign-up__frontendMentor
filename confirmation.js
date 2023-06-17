const form = document.getElementById("form");
const inputEmail = document.getElementById("email");
const card = document.querySelector(".card");
const cardConfirmation = document.querySelector(".card-approved");
const validEmail = document.getElementById("valid-email");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputValue = inputEmail.value;
    let splitValue = inputValue.split("");
    let matchEmail = splitValue.includes("@");

    if (!matchEmail) {
        inputEmail.classList.add("error");
        validEmail.classList.remove("hide");
        return;
    }

    card.classList.add("hide");
    cardConfirmation.classList.remove("hide");
});
