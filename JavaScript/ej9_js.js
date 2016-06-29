//Ejercicio 9: promedio
//Escribir una función promediame que recibe un arreglo de
//números como argumento y retorna el promedio.

function promediame() {
  var n1 = parseFloat(document.getElementById('num1').value);
  var n2 = parseFloat(document.getElementById('num2').value);
  var n3 = parseFloat(document.getElementById('num3').value);
  var n4 = parseFloat(document.getElementById('num4').value);
  var a = [n1,n2,n3,n4];
  var suma = 0;

  for (var i = 0; i < a.length; i++) {
    suma = suma + a[i];
    promedio = suma / a.length

    //alert(r);
  }

  document.getElementById('promediar').innerHTML= promedio;

}