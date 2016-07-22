=begin
 Crear una función saluda que reciba una cadena nombre y retorne el texto
 "Hola [nombre]" donde [nombre] es el valor de la cadena que se recibió
 por parámetro.
=end

def saluda
  puts "Bienvenido, ¿cuál es tu nombre?"
  name=gets.chomp
  puts "Hola #{name}"
end

saluda