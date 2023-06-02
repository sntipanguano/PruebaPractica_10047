//Escribe un condicional que verifique si una persona es mayor de edad. 
//Si es mayor de edad, imprime "Es mayor de edad", de lo contrario, imprime "Es menor de edad".

function verifica(edad) {
    if (edad >= 18) {
      console.log("Es mayor de edad");
    } else {
      console.log("Es menor de edad");
    }
  }
  
  verifica(20); 
  verifica(16); 
  