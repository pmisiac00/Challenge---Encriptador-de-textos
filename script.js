console.log('JavaScript cargado.')

let entradaTexto = document.querySelector('#ingresar_mensaje');
let salidaTexto = document.querySelector('#mensaje_contenido');
const areaTexto = document.getElementById('ingresar_mensaje');

areaTexto.addEventListener('input', function() {
    areaTexto.value = removeCaracteresEspeciales(removeAcentos(areaTexto.value));
});

function removeAcentos(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function removeCaracteresEspeciales(text) {
    return text.replace(/[^a-zA-Z0-9 ]/g, '');
}

function encriptar() {
    console.log("Encriptar botón clickeado");
    let text = entradaTexto.value.trim();
    if (text === '') {
        alerta01();
        return;
    }

    let encriptadoTexto = text.replace(/e/g, 'enter')
                          .replace(/i/g, 'imes')
                          .replace(/a/g, 'ai')
                          .replace(/o/g, 'ober')
                          .replace(/u/g, 'ufat');

    salidaTexto.innerHTML = '<textarea readonly id="texto_salida">' + encriptadoTexto + '</textarea>' +
                          '<button class="boton_copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function desencriptar() {
    console.log("Desencriptar botón clickeado");
    let text = entradaTexto.value.trim();
    if (text === '') {
        alerta02();
        return;
    }
    let desencriptadoTexto = text.replace(/enter/g, 'e')
                                .replace(/imes/g, 'i')
                                .replace(/ai/g, 'a')
                                .replace(/ober/g, 'o')
                                .replace(/ufat/g, 'u');

    salidaTexto.innerHTML = '<textarea readonly id="texto_salida">' + desencriptadoTexto + '</textarea>' +
                            '<button class="boton_copiar" id="copiar" onclick="copiar()">Copiar</button>'; 
}

function copiar() {
    let copiarTexto = document.getElementById('texto_salida');
    copiarTexto.select();
    document.execCommand('copy');
}

function resetContenido() {
    salidaTexto.innerHTML = '<img src="./assets/pink_flowers.png" alt="">' +
                        '<h1>Ningún mensaje fue encontrado</h1>' +
                        '<h3>Ingresa el texto que desees encriptar o desencriptar.</h3>';
}

function alerta01() {
    alert('Por favor, ingrese el mensaje que desea encriptar.');
}

function alerta02() {
    alert('Por favor, ingrese el mensaje que desea desencriptar.');
}

resetContenido();
