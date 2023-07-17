 /* Bosquejo: PERFECTO
        Un número es perfecto cuando la suma de sus divisores (excepto el propio número) es igual al mismo número
        Ejemplo: 6, 28, 496, 8128
  
        Ejercicio:
        num = 6
        suma = 0
  
        Para i = 1 hasta i < num   // i=1            i=2           i=3
           Si num % i == 0         // 6%1==0        6%2==0         6%3==0
              suma += i            // suma=0+1=1   suma=1+2=3   suma=3+3=6
           Fin Si
        Fin Para
  
        Si suma == num      // 6 == 6
           Es perfecto
        Si no
           No es perfecto
        Fin Si 
        
        */
////////////////////////////////////////////////////////////////////
         /* AMIGOS
        Dos números son amigos si la suma de los divisores de num1 es igual a num2 y viceversa
        Ejemplo: 220 y 284
        La suma de los divisores de 220 es 284
        1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284
        La suma de los divisores de 284 es 220
        1 + 2 + 4 + 71 + 142 = 220 
        */
////////////////////////////////////////////////////////////////////
          /* Bosquejo: PRIMO
        Un número es primo cuando tiene exactamente dos divisores: el 1 y el mismo número 
        Ejemplo: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
  
        Ejercicio:
        
        num = 4
        i = 2
        mod = 1
  
        Mientras i < num y mod != 0    // 2<4 y 1!=0
           mod = num % i              // mod = 4 % 2 = 0
           Si mod != 0               // 0 != 0  Falso
              i++                    
           Fin Si
        Fin Mientras 
        
        // i=2 y mod=0 
        // Mientras i < num y mod != 0    // 2<4 y 0!=0 Falso
        // Sale del ciclo
  
        Si mod != 0                  // 0 != 0 Falso
           Es primo
        Sino
           No es primo
        Fin Si
        */
       //////////////////////////////////////////////////////////////////
        /* PRIMO GEMELOS
        Los primos gemelos son pares de números primos que están separados por una diferencia de dos.
        Ejemplo:
        3 y 5 son primos gemelos
        5 y 7 son primos gemelos
        11 y 13 son primos gemelos
        17 y 19 son primos gemelos
        */
       ///////////////////////////////////////////////////////////////////////
          /* Bosquejo: NUMERO INVERTIDO
  
        num = 123
        invertido = ""
  
        Mientras num > 0   // 123 > 0
           mod = 123 % 10    // mod = 3
           num = redondear(num / 10)  // num = 12
           invertido = invertido + mod.toString() // invertido = 3
        Fin Mientras
        
        Mientras num > 0   // 12 > 0
           mod = 12 % 10     // mod = 2
           num = redondear(num / 10)  // num = 1
           invertido = invertido + mod.toString() // invertido = 32
        Fin Mientras
  
        Mientras num > 0   // 1 > 0
           mod = 1 % 10      // mod = 1
           num = redondear(num / 10)  // num = 0
           invertido = invertido + mod.toString() // invertido = 321
        Fin Mientras
  
        Mientras num > 0   // 0 > 0 Falso
        Sale del bucle
  
        "El numero invertido es ", invertido   // 321
        */
       //////////////////////////////////////////////////////////////////
        /* Bosquejo: CANTIDAD DIGITOS
        Para sacar la cantidad de digitos de un numero se divide el numero entre 10.
        Luego acumulo la cantidad de veces que se puede dividir el numero entre 10
  
        Por ejemplo:
        num = 10
        mientras 10 > 0
           redondear(10 / 10) = 1
           cantidad = 1
  
        mientras 1 > 0
           redondear(1 / 10) = 0
           cantidad = 2
  
        mientras 0 > 0 Sale del bucle 
  
        Cantidad de digitos = 2
        
        */
       ////////////////////////////////////////////////////
       //FACTORIAL
    // El factorial de un numero se obtiene multiplicando el numero por todos los numeros que le anteceden
        // 5! = 5 * 4 * 3 * 2 * 1 = 120
        ////////////////////////////////////////////////////////////////
     /* Bosquejo: FIBONACI
  
        La serie de fibonacci se obtiene sumando los 2 numeros anteriores
        serie = 8  = 0, 1, 1, 2, 3, 5, 8, 13
  
  
        num = 3
        serie = ""
        a = 0
        b = 1
        c = 0
  
        Para i = 0 Hasta i < num     // i=0    0 < 3
           serie = serie + a + ", "  //serie = "0,"
           c = a + b       // c = 0 + 1 = 1  
           a = b          // a = 1
           b = c         // b = 1
        Fin Para
  
        Para i = 1 Hasta i < num   // i=1    1 < 3
           serie = serie + a + ", "  //serie = "0, 1,"
           c = a + b       // c = 1 + 1 = 2
           a = b          // a = 1
           b = c         // b = 2
        Fin Para
  
        Para i = 2 Hasta i < num   // i=2    2 < 3
           serie = serie + a + ", "  //serie = "0, 1, 1,"
           c = a + b       // c = 1 + 2 = 3
           a = b          // a = 2
           b = c         // b = 3
        Fin Para
  
        Para i = 3 Hasta i < num   // i=3    3 < 3 Falso
        Sale del bucle
  
        "La serie de fibonacci es: ", serie   // "La serie de fibonacci es: 0, 1, 1"
        
        */