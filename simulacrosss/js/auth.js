import { loginBtn, passwordInput, emailInput, message } from "./main.js";

const url = "http://localhost:3000/users";

// REGISTER BOTTON
if (goRegisterBtn) {
    goRegisterBtn.addEventListener("click", () => {
        window.location.href = "./template/register.html";
    });
}

// Utilities
async function getUsers() {
    const res = await fetch(url);
    return res.json();
}

function getLocalUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveSession(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

// LOGIN
loginBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const data = getUsers();

    const validUsers = data.find((user) => user.email === email && user.password === password)

    if (validUsers) {
        message.textContent = ` Bienvenido ${username}`;
        message.style.color = "green";
    } else {
        message.textContent = " Usuario no encontrado";
        message.style.color = "red";
    } if (!username || !password) {
        message.textContent = ` Complete los campos`;
        message.style.color = "red";
    }
})


