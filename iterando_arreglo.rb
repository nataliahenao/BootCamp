=begin
Escribir un método llamado count_matches que reciba dosparámetros: un arreglo de números y un número.
La función debe devolver el número de veces que aparece el número (segundo parámetro) en el arreglo
(primer parámetro).
=end

def count_matches(vararray,num)
	p "El valor #{num} se encuentra #{vararray.count(num)} veces en el array"
end

vararray=[]
p "ingrese el tamaño del array"
n=gets.chomp.to_i

cont=0
for i in 1..n
  p "ingrese el valor en la posicion #{cont}"
  valor=gets.chomp.to_i
  vararray.push(valor)
  cont+=1
end

p "Ingrese el valor que desea buscar"
num=gets.chomp.to_i

count_matches(vararray,num)