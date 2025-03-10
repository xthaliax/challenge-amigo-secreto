// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let ul = document.querySelector("#listaAmigos");

function agregarAmigo(){
    let amigo = document.querySelector("#amigo").value;

    if(amigo==""){
        alert("Por favor, inserte un nombre");

    }else {

        amigos.push(amigo);
        document.querySelector("#amigo").value= "";
        mostrarAmigo();
    }

}

function mostrarAmigo(){

    ul.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {

        let li = document.createElement("li");
        li.appendChild(document.createTextNode(amigos[i]));
        ul.appendChild(li);

    }
}

function sortearAmigo(){

    if(amigos == ""){
        alert("Ingresa algún nombre para poder iniciar el sorteo");
    }else{
        let sorteado = Math.floor(Math.random()*amigos.length);

        ul.innerHTML = "";

        let resultado = document.querySelector("#resultado");
        resultado.innerHTML = "¡El amigo sorteado es: " + amigos[sorteado] + "!";
    }
}