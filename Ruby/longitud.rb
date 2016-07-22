=begin
crear un método longitud que encuentre la longitud de una cadena (string).
=end

def longitud
  loop do
    puts "Ingresa la palabra o texto al cual deseas hallar la longitud"
    text=gets.chomp
    long= text.length
    response = <<-MSG
      La longitud del texto es:
      #{long}
    MSG
    puts "#{response} ¿Deseas hallar otra longitud? (Oprime 1 para continuar o cualquier otro valor para salir)"

    answer=gets.chomp
    break unless answer.start_with?('1')
  end
end

longitud


