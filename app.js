// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
   let AgregarAmigo = document.getElementById("amigo");
   let amigo = AgregarAmigo.value;
   if(!amigo){
    alert("Debe ingresar un nombre");
    return;
   } 
  
   amigos.push(amigo);
   AgregarAmigo.value = "";
   AgregarAmigo.focus();
   mostrarAmigos();
   
   
}

function mostrarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0; i< amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}   

function sortearAmigo(){
    if(amigos.length === 0 ){
        alert("No hay amigos para sortear");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random()* amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML  = `El amigos sorteado es: ${amigoSorteado}`;
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML= "";
}