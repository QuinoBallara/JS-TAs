function reverseString(texto) {
    let array = texto.split("");
    array = array.reverse();
    texto = array.join("");
    console.log(texto);
}

reverseString("Hola");