// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value.trim();
    let listaAmigoElemento = document.getElementById('listaAmigos');

    if (nombreAmigo === ''){
        alert('ingrese el nombre de un amigo');
    }else{
        listaAmigos.push(nombreAmigo);
        listaAmigoElemento.innerHTML =listaAmigos.map(amigo => `<li>${amigo}</li>`).join('');
        document.getElementById('amigo').value = '';
    }

    return nombreAmigo;
}

agregarAmigo();

function sortearAmigo(){
    let resultadoAmigo = document.getElementById('resultado');

    if (listaAmigos.length ===0){
        alert('no hay amigos agregados');
        return;
    }

    let amigoAleatorio = Math.floor(Math.random()*listaAmigos.length);
    let resultado = listaAmigos[amigoAleatorio];

    resultadoAmigo.innerHTML = `el amigo seleccionado es ${resultado}`;
    return resultado;
}

