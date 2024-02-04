let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximoDeJuegos = 10;

condicionesIniciales();

function asignarTextoAElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoAElemento("p",`¡Acertaste el número!". Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoAElemento("p","El número secreto es MENOR");
        } else {
            asignarTextoAElemento("p","El número secreto es MAYOR");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}   


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximoDeJuegos)+1;

    console.log(`El número secreto es: ${numeroGenerado}`);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximoDeJuegos) {
        asignarTextoAElemento("p","Ya se sortearon todos los números posibles");
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoAElemento("h1","Juego del número secreto");
    asignarTextoAElemento("p",`Adivina un número aleatorio entre 1 y ${numeroMaximoDeJuegos}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
}


function reiniciarJuego() {
    //Limpiar Caja
    limpiarCaja();
    //Indicamos mensaje de intervalo de números
    //Generamos número aleatorio    
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}


