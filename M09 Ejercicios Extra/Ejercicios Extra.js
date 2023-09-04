/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let arrayKeysYValues = [];

  for (const clave in objeto) {
    let arrayKeyYValue = [];
    if (objeto.hasOwnProperty(clave)) {
      const valor = objeto[clave];
      arrayKeyYValue.push(clave);
      arrayKeyYValue.push(valor);
    }
    arrayKeysYValues.push(arrayKeyYValue);
  }

  return arrayKeysYValues;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  const fromStringToArray = string.split("").sort();
  let charactersObject = {};
  fromStringToArray.forEach((element) => {
    charactersObject[element] = !charactersObject[element]
      ? 1
      : (charactersObject[element] += 1);
  });
  return charactersObject;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let letrasMinusculas = "";
  let letrasMayusculas = "";
  for (let index = 0; index < string.length; index++) {
    if (string[index] === string[index].toUpperCase()) {
      letrasMayusculas += string[index];
    } else {
      letrasMinusculas += string[index];
    }
  }
  return letrasMayusculas + letrasMinusculas;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let arrayOfReversedItems = [];
  let temp_characters = "";
  const arrayFromString = frase.split(" ");
  arrayFromString.forEach((item) => {
    for (let i = item.length - 1; i > -1; i--) {
      temp_characters += item[i];
    }
    arrayOfReversedItems.push(temp_characters);
    temp_characters = "";
  });
  return arrayOfReversedItems.join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let numeroAlReves = "";
  const stringFromNumber = numero.toString();
  for (let i = stringFromNumber.length - 1; i > -1; i--) {
    numeroAlReves += stringFromNumber[i];
  }
  return numero == numeroAlReves ? "Es capicua" : "No es capicua";
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let stringSinAbc = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "b" || string[i] === "c") {
      continue;
    }
    stringSinAbc += string[i];
  }
  return stringSinAbc;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  // Utiliza el método sort() con una función de comparación personalizada
  return arrayOfStrings.sort(function (a, b) {
    // Compara las longitudes de las cadenas a y b
    return a.length - b.length;
  });
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let unionArray = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        unionArray.push(array1[i]);
      }
    }
  }
  return unionArray;
}

buscoInterseccion([1, 2, 3], [1, 5, 8, 3]);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
