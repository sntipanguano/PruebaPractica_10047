//Crea una función llamada "primerElementoArray" que 
//reciba como parámetro un array y retorne el primer elemento.

function primerElementoArray(array) {
    if (array.length > 0) {
      return array[0];
    } else {
      return;
    }
  }
  
  const miArray = [1, 2, 3, 4, 5];
  const primerElemento = primerElementoArray(miArray);
  console.log(primerElemento); 
  