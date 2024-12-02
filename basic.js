//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida al bootcamp de FemCoders de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log("Bienvenida al bootcamp de FemCoders de Factoría F5")






//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por cada tipo de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

//String
let yo = 'sulma'
console.log(yo);


//number
let number = 7
console.log(number)

//boolean
let boolean = true 
console.log (boolean)

//null
let nulo = null
console.log (nulo)

//undefind
let bueno =undefined;
console.log (bueno)
//object
let carfor ={ type:"car",color:"rosa", size:5}
console.log(carfor.type);
console.log(carfor.color);
console.log(carfor.size);
//array 
const array = [ 'manzana' ,'platano', 'naranja']
console.table(array)





//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí
//array 
const postres = [ 'helado' ,'tarta', 'pastel']
console.table(postres)



//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí
//object
const coder ={ nombre:"Sulma",edad:"22"};
console.log(coder.nombre);
console.log(coder.edad);




//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado en el ejercicio 2.

//Escribe tu código aquí
console.log(typeof(yo));
console.log(typeof(number));
console.log(typeof(boolean));
console.log(typeof(nulo))
console.log(typeof(bueno));
console.log(typeof(carfor));
console.log(typeof(array));




//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let suma = 2
let sumar = 3
console.log(suma+sumar);




//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let resta = 5
let restar = 8
console.log(resta-restar);

//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí


let multiplico = 12
let multiplicas = 4
console.log(multiplico*multiplicas);

//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let divide = 10;
let dividir = 7;
console.log(divide/dividir);


//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con un valor numérico de 1 y la segunda con un valor numérico de 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let s = 4
let m = 6
let resultado = s == m
console.log(resultado);





// Ejercicio 11: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let resultado1 = s != m;
console.log (resultado1);




//Ejercicio 12: completa el ejercicio

let num1 = 15
let num2 = 20

//let comparision = //Realiza la operación de comparación que consideres para que el resultado en consola sea true
//console.log(comparision)

let compara = num1 != num2;
console.log("llamar 12:" +compara);
//Ejercicio 13: completa el ejercicio

let num3 = 1
let num3AsString = "1"

//Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad

let result = num3 === num3AsString;
console.log("llamar 13:" + result) 

//Ejercicio 14: completa el ejercicio

 //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.

let result2 = num3 == num3AsString;
console.log("llamar 14:" + result2)


//OPERADORES DE CADENAS
//Ejercicio 15: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí
let nombre = "Sulma";
let apellido = "Vasquez";
let nombreCompleto = nombre + " " + apellido;
console.log("llamar 15:" + nombreCompleto);


//OPERADORES DE LÓGICA
//Ejercicio 16: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

//(Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6
let b = 3

//Eliminar el espacio "" y coloca el comparador lógico que consideres para que el resultado sea true

let res =  a < 10 && b > 1 ;
console.log(res)




//Eliminar el espacio "" y coloca el comparador lógico que consideres para que el resultado sea false

let res2 = a < 10 && b < 1;
console.log(res2)


 //Eliminar el espacio "" y coloca el comparador lógico que consideres para que el resultado sea false

 let res3 = a == 5 && b == 5;
console.log(res3)


//Eliminar el espacio "" y coloca el comparador lógico que consideres para que el resultado sea true
let res4 = a == 6 || b == 0;
console.log(res4)


//Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
let res5 = a == 0 || b == 3;
console.log(res5)


 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
 let res6 = a == 6   || b  == 3;
 console.log(res6)
 


