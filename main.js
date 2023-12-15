function playSonido (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

//optimizando el codigo 

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;


while (contador < 9) {
    //constante que selecciona el boton 1° clase 
    const tecla = listaDeTeclas[contador];
    //constante que selecciona la 2° clase
    const instrumento = tecla.classList[1];
    //constante con temple string para elegir el audio correspondiente
    const idAudio = `#sonido_${instrumento}`

    //uso de funciones anonimas la invoca pero no la ejecuta 
    tecla.onclick = function(){
        playSonido(idAudio);
    }
    contador++;
}
