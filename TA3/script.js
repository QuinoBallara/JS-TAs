function removeFromArray(arreglo, item) {
    arreglo.splice(arreglo.indexOf(item), 1);
    console.log(arreglo);
}

let arreglo = [1, 2, 3, 4];
removeFromArray(arreglo, 2);