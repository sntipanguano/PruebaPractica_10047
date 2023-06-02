//Crea una función llamada "imprimirElementosArray" 
//que reciba como parámetro un array y lo imprima usando un ciclo "for".

function imprimirElementosArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

  const miArray = [1, 2, 3, 4, 5];
  imprimirElementosArray(miArray);
  
  