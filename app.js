var loginBtn = document.getElementById("loginBtn");
var saveBtn = document.getElementById("saveBtn");
var cadastrarBtn = document.getElementById("cadastrarBtn")

var body = document.querySelector("body");

const nomeCompleto = document.getElementById("nomeCompleto");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const telefone = document.getElementById("telefone");

const apiUrl = "http://localhost:8080/login";



loginBtn.addEventListener('click', () =>{
    body.className = "sign-in-js";
})

cadastrarBtn.addEventListener('click', () =>{
    body.className = "sign-up-js";
})
//Método POST, Enviar JSON para API
saveBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const jsonData = {
        nomeCompleto: nomeCompleto.value,
        email: email.value,
        senha: senha.value,
        telefone: telefone.value
    };

    fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => {
        if (response.ok) {
            console.log("User successfully registered!");
        } else {
            console.error("Error: " + response.status);
        }
    })
    .catch(error => console.error("Fetch error:", error));
});