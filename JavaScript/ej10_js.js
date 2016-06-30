//Ejercicio 10: typeExtractor
//Escribir una función JavaScript llamada typeExtractor la cual
//recibe como único argumento un arreglo con diferentes valores,
//la función debe retornar un objeto literal con los valores
//separados por tipo.

var x = [ 1, 2, "hello", 3, 4, "world", true, 5, false ];
var arreglo = typeExtractor(x);

function typeExtractor(vector) { //los valores de x pasan a vector

      var result = {
        number:[],
        string:[],
        boolean:[]
      }

      for (var i = 0; i < vector.length; i++) {

        if (typeof vector[i] == "number") {
          result.number.push(vector[i]);

        } else {
            if (typeof vector[i] == "string") {
              result.string.push(vector[i]);
            } else {
                result.boolean.push(vector[i]);
              }
          }
      }

      return result;
}

document.write("Number: " + arreglo.number + "<br>");
document.write("String: " + arreglo.string + "<br>");
document.write("Boolean: " + arreglo.boolean + "<br>");


