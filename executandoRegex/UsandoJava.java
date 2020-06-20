import java.util.regex.*;

public class UsandoJava {
    public static void main(String[] args) {
        String texto = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";

        Pattern patternLetras = Pattern.compile("[a-d]");

        Matcher matcher = patternLetras.matcher((texto));

        System.out.printf("Exemplo1:\n");
        while (matcher.find()) {
            System.out.printf("Posicoes: %s, %s \tValor? %s%n", 
                                matcher.start(), matcher.end(), matcher.group());

    /*
Exemplo1:
Posicoes: 20, 21 	Valor? a
Posicoes: 22, 23 	Valor? b
Posicoes: 24, 25 	Valor? c
Posicoes: 26, 27 	Valor? d
    */
        }


        System.out.println("\n\nExemplo2:");
        System.out.println(texto.replaceAll("[6-9]", "Achei"));
/*
Exemplo2:
0,1,2,3,4,5,Achei,Achei,Achei,Achei,a,b,c,d,e,f
*/

    }
}