package main

import (
	"regexp"
	"fmt"
	"bytes"
)

func main() {
	texto := "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"
	
	fmt.Println("*****************    Metodos da RegExp    *****************'	")
	regex9, _ := regexp.Compile("9")

	fmt.Println("Exemplo1:")
	fmt.Println(regex9.MatchString(texto))
/*
Exemplo1:
true	
*/

fmt.Println("Exemplo2:")
fmt.Println(regex9.FindString(texto))
/*
Exemplo2:
9
*/

fmt.Println("Exemplo3:")
fmt.Println(regex9.FindStringIndex(texto))
/*
Exemplo3:
[18 19]
*/

fmt.Println("*****************    Metodos de RegxLetras    *****************'	")
regexLetras, _ := regexp.Compile("[a-d]")

fmt.Println("Exemplo4:")
fmt.Println(regexLetras.FindAllString(texto,20)) // Desejando receber até 20 ocorrências
/*
Exemplo4:
[a b c d]
*/

fmt.Println("Exemplo5:")
fmt.Println(regexLetras.FindAllString(texto,3)) // Desejando receber até 3 ocorrências
/*
Exemplo5:
[a b c]
*/

fmt.Println("Exemplo6:")
fmt.Println(regexLetras.ReplaceAllString(texto,"Achei")) // Desejando receber até 3 ocorrências
/*
Exemplo6:
0,1,2,3,4,5,6,7,8,9,Achei,Achei,Achei,Achei,e,f
*/

fmt.Println("Exemplo7:")
resultado := regexLetras.ReplaceAllFunc([]byte(texto), bytes.ToUpper)
fmt.Println(string(resultado))
/*
Exemplo7:
0,1,2,3,4,5,6,7,8,9,A,B,C,D,e,f
*/


}