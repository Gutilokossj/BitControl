var loginBtn = document.getElementById("loginBtn");
var saveBtn = document.getElementById("saveBtn");
var cadastrarBtn = document.getElementById("cadastrarBtn")

var body = document.querySelector("body");

const nomeCompleto = document.getElementById("nomeCompleto").value;
const email = document.getElementById("email").value;
const senha = document.getElementById("senha").value;
const telefone = document.getElementById("telefone").value;

const apiUrl = "http://localhost:8080/login";

var jsonData = `{"nomeCompleto": "${nomeCompleto}", "email":"${email}", "senha":"${senha}", "telefone":"${telefone}"}`;
var obj = JSON.parse(jsonData);

loginBtn.addEventListener('click', () =>{
    body.className = "sign-in-js";
})

cadastrarBtn.addEventListener('click', () =>{
    body.className = "sign-up-js";
})
//Método POST, Enviar JSON para API
saveBtn.addEventListener("click", function (event) {
    event.preventDefault();

    fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(obj),
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