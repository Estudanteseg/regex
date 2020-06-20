texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'


puts '*****************    Metodos da RegExp    *****************'
regexNove = Regexp::new('9')

puts 'Exemplo1:'
puts regexNove.match(texto)
=begin
Exemplo1:
9
=end

puts 'Exemplo2:'
puts regexNove =~'831594'
=begin
Exemplo2:
4

Retornou o índice da busca
=end

puts 'Exemplo3:'
puts regexNove =~'824215'
=begin
Exemplo3:

Não retornou nada
=end


puts 'Exemplo4:'
p puts regexNove =~'824215'
=begin
Exemplo4:

nil

Retornou nulo
=end


puts '*****************    Metodos da string    *****************'
regexLetras = /[a-f]/


puts 'Exemplo5:'
puts texto.scan(regexLetras)
=begin
Exemplo5:
a
b
c
d
e
f
=end

puts 'Exemplo6:'
puts texto.scan(regexLetras).join()
=begin
Exemplo6:
abcdef
=end


puts 'Exemplo7:'
puts texto.scan(regexLetras).join(';')
=begin
Exemplo7:
a;b;c;d;e;f
=end


puts 'Exemplo8:'
puts texto.split(/[aeiou]/)
=begin
Exemplo8:
0,1,2,3,4,5,6,7,8,9,
,b,c,d,
,f

A cada vogal encontrada faz um split
=end


puts 'Exemplo9:'
print texto.split(/[aeiou]/)
=begin
Exemplo9:
["0,1,2,3,4,5,6,7,8,9,", ",b,c,d,", ",f"]

A cada vogal encontrada faz um split porém com o comando print volta em um array
=end