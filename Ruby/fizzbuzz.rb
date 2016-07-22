=begin
diseñar y escribir un método llamado fizz_buzz que reciba como único argumento un número.
El método debe cumplir las siguientes condiciones:
● Si el número de entrada es múltiplo de 3 debe retornar el string fizz
● Si el número de entrada es múltiplo de 5 debe retornar el string buzz
● Si el número de entrada es múltiplo tanto de 3 como de 5 debe retornar el string
● Si el número no cumple ninguna de estas condiciones debe retornar el mismo numero de entrada
=end

def fizz_buzz(num)
	if num%3==0 and num%5==0
		p "FizzBuzz - El #{num} es multiplo de 3 y 5"
	else
		if num%3==0
			p "Fizz - El #{num} es multiplo de 3"
		else
			if num%5==0
				p "Buzz - El #{num} es multiplo de 5"
			else
				p "El valor #{num} no es multiplo de 3 ni de 5"
			end
		end
	end
end

def valid_number(num)
	num.to_i != 0
end

num=''
loop do
	p "Ingrese el valor numerico"
	num=gets.chomp.to_i

	if valid_number(num)
		break
	else
		p "Ingrese un valor numerico valido"
	end
end

fizz_buzz(num)