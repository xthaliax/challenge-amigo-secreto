// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let amigo = document.querySelector("#amigo").value;

    if(amigo==""){
        alert("Por favor, inserte un nombre");

    }else {

        amigos.push(amigo);
        document.querySelector("#amigo").value= "";
    }

}

