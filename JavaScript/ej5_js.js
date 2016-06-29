//Ejercicio 5: Multiplier
function multiplier() {
  var n1 = document.getElementById('num1').value;
  var n2 = document.getElementById('num2').value;
  var n3 = document.getElementById('num3').value;
  var m1 = document.getElementById('multiplica').value;
  var a = [n1,n2,n3];

  function multiplicador(arreglo,escalar){

    var b = arreglo.map(function(x) {
        return x * escalar;
    });
    return b;
  }

  document.getElementById('multi').innerHTML= multiplicador(a,m1);

}