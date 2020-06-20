import re

texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

print ("*****************    Metodos da RegExp    *****************")
pattern9 = re.compile('9')

print("\nExemplo1:")
match1 = re.search(pattern9, texto)
print ("Posicoes %s, %s; Valor: %s." % (match1.start(), match1.end(), match1.group(0)))
"""
Exemplo1:
Posicoes 18, 19; Valor: 9.
"""

print("\nExemplo2:")
valores = re.findall('[a-d]',texto)
print "Valores: %s" % valores
"""
Exemplo2:
Valores: ['a', 'b', 'c', 'd']
"""