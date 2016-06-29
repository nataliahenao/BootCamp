//Ejercicio 1: Suma
function suma() {
  var number1= document.getElementById('num1').value;
  var number2= document.getElementById('num2').value;
  var total= parseFloat(number1) + parseFloat(number2);
   //alert('El resultado es: '+total);
   document.getElementById('resultado').innerHTML=total
   //document.write('El resultado de la suma entre '+number1+' y '+number2+' es: '+total);
}

//Ejercicio 2: Lenght
function cadena() {
  var tex= document.getElementById('texto').value;
  var n=tex.length;
  document.getElementById('tamaño').innerHTML=n;
}

//Ejemplo 3: fizzbuzz
//Si él numero de entrada es multiplo de 3 debe retornar él string fizz
// Si él numero de entrada es multiplo de 5 debe retornar él string buzz
//Si él numero de entrada es multiplo tanto de 3 como de 5 debe retornar él string fizzbuzz
//Si él numero no cumple ninguna de estas condiciones debe retornar él mismo numero de entrada.

function fizzbuzz() {
  var numero= document.getElementById('num').value;

  if ((numero%3 ==0) && (numero%5 ==0) ){
    document.getElementById('result').innerHTML='fizzbuzz';
  } else {
      if (numero%3 ==0) {
      document.getElementById('result').innerHTML='fizz';
      }
      else {
        if (numero%5 ==0) {
           document.getElementById('result').innerHTML='buzz';
        } else {
           document.getElementById('result').innerHTML=numero;
        }
      }
    }
}

//Ejercicio 4: fibonacci
//La sucesion de fibonacci se calcula asi: f(n) = f(n­1) + f(n ­ 2) donde f(0) == 0 y f(1) ==

function fibonacci() {
  var x = document.getElementById('nume').value;
  var a = 0;
  var b = 1;
  var c;
  var i;

  for (var i = 1; i < x; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  document.getElementById('valor').innerHTML= c;

}

