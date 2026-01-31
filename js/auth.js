import { loginBtn, url, passwordInput, emailInput, message } from "./main.js";


// REGISTER BOTTON
if (goRegisterBtn) {
    goRegisterBtn.addEventListener("click", () => {
        window.location.href = "./template/register.html";
    });
}

// -----------------Utilities-------------
async function getUsers() {
    const res = await fetch(url);
    return await res.json();
}

function saveSession(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

// LOGIN
loginBtn.addEventListener("click", async () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        message.textContent = ` Complete los campos`;
        message.style.color = "red";
        return;
    }

    const users = await getUsers();

    const validUsers = data.find(
        user => user.email === email && user.password === password
    );


    if (validUsers) {
        saveSession(validUsers);
        message.textContent = ` Bienvenido ${validUsers.username}`;
        message.style.color = "green";
    } else {
        message.textContent = " Usuario no encontrado";
        message.style.color = "red";
    }

});

export async function registerUser(user) {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    return await res.json();
}



