const signupForm = document.querySelector(".signup__form");
const emailInput = document.querySelector("#email-input");
const emailHint = document.querySelector("#email-input-hint");

const validateEmail = () => {
    let errorMessage = "";
    if (emailInput.value === "") {
        errorMessage = "Please fill out this field.";
    } else if (/^[^@]+@[^@]+\.[^@]+$/.test(emailInput.value) === false) {
        errorMessage = "Please provide a valid email address.";
    }

    if (errorMessage !== "") {
        emailInput.setAttribute("aria-invalid", "true");
        emailHint.textContent = errorMessage;
        emailInput.focus();
        return false;
    }
    emailHint.textContent = "";
    emailInput.setAttribute("aria-invalid", "false");
    return true;
};

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateEmail() === true) {
        alert("We will contact you in short time!");
        signupForm.reset();
    }
});
