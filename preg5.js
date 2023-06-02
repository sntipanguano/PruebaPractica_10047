//Crea una función llamada "imprimirArray" que reciba como parámetro un array
// y lo imprima elemento por elemento. 

function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
}

let miArray = [1, 2, 3, 4, 5];
imprimirArray(miArray);
