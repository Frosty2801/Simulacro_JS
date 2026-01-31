import { backLoginBtn, url,  emailInput, passwordInput, regEmail, registerBtn, regPassword } from "./main.js";


async function userRegister(user) {
    
    const res = await fetch(`${url}?email=${user.name}`)
    const data = await res.json();

    if (data.length > 0)
        
}


if (backLoginBtn) {
    backLoginBtn.addEventListener("click", () => {
        window.location.href = "../index.html";
    });
}