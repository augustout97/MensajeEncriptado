var resultadoBoton = document.getElementById("copiar");
var res = document.getElementById("contenidoResultado");
resultadoBoton.style.display = "none";
res.style.display = "none";
function myFunction() {

    var textareaValor = document.getElementById('contenido__textarea').value;
    var imageElement = document.getElementById("image");
    var encabezadoElement = document.getElementById("contenido__encabezado");
    var descripcionElement = document.getElementById("contenido__descripcion");

    if (textareaValor.trim() === '') {
        imageElement.style.display = "block";
        encabezadoElement.style.display = "block";
        descripcionElement.style.display = "block";
        res.style.display = "none";
        resultadoBoton.style.display = "none";
    } else {

            imageElement.style.display = "none";
            encabezadoElement.style.display = "none";
            descripcionElement.style.display = "none";
            res.style.display = "block";
            resultadoBoton.style.display = "block";

            var en = encriptar(textareaValor);
            res.value = en;
    }

}

function decrypt(){
    var textareaValor = document.getElementById('contenido__textarea').value;
    var imageElement = document.getElementById("image");
    var encabezadoElement = document.getElementById("contenido__encabezado");
    var descripcionElement = document.getElementById("contenido__descripcion");

    if (textareaValor.trim() === '') {
        imageElement.style.display = "block";
        encabezadoElement.style.display = "block";
        descripcionElement.style.display = "block";
        res.style.display = "none";
        resultadoBoton.style.display = "none";
    } else {

            imageElement.style.display = "none";
            encabezadoElement.style.display = "none";
            descripcionElement.style.display = "none";
            res.style.display = "block";
            resultadoBoton.style.display = "block";

            var en = desencriptar(textareaValor);
            res.value = en;
    }
}

function desencriptar(cadena) {
    const replacements = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    };

    let output = cadena;
    for (let key in replacements) {
        let regex = new RegExp(key, "g");
        output = output.replace(regex, replacements[key]);
    }
    return output;
}


function algorithm(cadena, mapa) {
    cadena = cadena.toLowerCase();

    let resultado = '';

    for (let index = 0; index < cadena.length; index++) {
        var caracter = cadena[index];

        if (caracter in mapa) {
            resultado += mapa[caracter];
        } else {
            resultado += caracter;
        }

    }

    return resultado;
}

function encriptar(cadena) {

    const mapa = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',
    };

    var resultado = algorithm(cadena, mapa);

    return resultado;
}



function copy() {
    let copyText = document.querySelector("#contenidoResultado");
    copyText.select();
    document.execCommand("copy");
}

document.querySelector("#copiar").addEventListener("click", copy);
