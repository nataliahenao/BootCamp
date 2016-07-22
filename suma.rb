#crear un metodo que sume 2 numeros. 

def prompt(message)
	puts("#{message}")
end

def valid_number(num)
	num.to_i != 0
end

loop do

	num1=''
	loop do 
		prompt("Ingrese el primer valor a ser sumado")
		num1=gets.chomp

		if valid_number(num1)
			break
		else
			prompt("Ingrese un valor numerico valido")
		end
	end

	num2=''
	loop do
		prompt("Ingrese el segundo valor a ser sumado")
		num2=gets.chomp

		if valid_number(num2)
			break
		else
			prompt("Ingrese un valor numerico valido")
		end
	end
	result=num1.to_i+num2.to_i

	prompt("El resultado de la suma es #{result}")

	prompt("Desea realizar otra suma? responda 'y' si desea continuar o otro valor si desea salir")
	answer=gets.chomp
	break unless answer.downcase.start_with?('y')
end