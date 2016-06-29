//Ejercicio 7: tabla de Multiplicar
function tabla() {
  for (var y = 1; y <= 10; y++) {

    for (var i = 1; i <= 10; i++) {

      val= i * y;
      document.write(y+"x"+i+"="+ val + "<br>");
    }
     document.write("<br>");
  }


}