//Ejercicio 8: Sumame
//Escribir una función llamada sumame que recibe un arreglo
//de números y debe retornar la suma de esos números.
function sumame() {
  var n1 = parseFloat(document.getElementById('num1').value);
  var n2 = parseFloat(document.getElementById('num2').value);
  var n3 = parseFloat(document.getElementById('num3').value);
  var n4 = parseFloat(document.getElementById('num4').value);
  var a = [n1,n2,n3,n4];
  var r = 0;

  for (var i = 0; i < a.length; i++) {
    r = r + a[i];
    //alert(r);
  }

  document.getElementById('sumar').innerHTML= r;

}