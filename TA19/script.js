const username = document.getElementById("username");
const password = document.getElementById("password");
const mail = document.getElementById("mail");
const form = document.getElementById("form");

const invalidMail = document.createElement("p");
invalidMail.textContent = "El correo es inválido."
function validMail() {
    if (mail.value.includes("@") && mail.value.includes(".") && mail.value.split("@")[0].length > 0 && mail.value.split("@")[1].split(".")[0].length > 0 && mail.value.split("@")[1].split(".")[1].length > 0) {
        if (invalidMail.parentElement == form) {
            form.removeChild(invalidMail);
            return true;
        }
    } else {
        form.appendChild(invalidMail);
        return false;
    }
}
validMail();
mail.addEventListener('input', validMail)

const invalidPass = document.createElement("p");
invalidPass.textContent = "La contraseña debe tener más de 8 caracteres";
function validPass() {
    if (password.value.length >= 8) {
        if (invalidPass.parentElement == form) {
            form.removeChild(invalidPass);
            return true;
        }
    } else {
        form.appendChild(invalidPass);
        return false;
    }
}
validPass();
password.addEventListener("input", validPass);


const emptyFields = document.createElement("p");
emptyFields.textContent = "Los campos no deben estar vacíos";
function notEmptyFields() {
    if (username.value.length > 0 && password.value.length > 0 && mail.value.length > 0) {
        if (emptyFields.parentElement == form) {
            form.removeChild(emptyFields);
            return true;
        }
    } else {
        form.appendChild(emptyFields);
        return false;
    }
}

notEmptyFields();
username.addEventListener("input", notEmptyFields);
password.addEventListener("input", notEmptyFields);
mail.addEventListener("input", notEmptyFields);