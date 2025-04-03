//Nombre y Apellido: Joaquin Leguizamon Guzman y Sanchez Leonel
//Curso: 6to B
//Grupo: 604
//Taller de Programacion III
//Departamento de Informatica - EESTn°1 - Raul Scalabrini Ortiz

// Trabajo Practico N°1

// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = null ;

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = null;

// Crea una variable booleana:
const nuevoBool = null;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - null === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = null * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === null;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.
// "Return" la string provista: str
// Tu código:
function devolverString(str) {
 return str;
}
// "x" e "y" son números
// Suma "x" e "y" juntos y devuelve el valor
// Tu código:
function suma(x, y) {
    return x + y;
}
// Resta "x" de "y" y devuelve el valor
// Tu código:
function resta(x, y) {
  return x - y;
}
// Multiplica "x" por "y" y devuelve el valor
// Tu código:
function multiplica(x, y) {
  return x * y;
}
// Divide "x" entre "y" y devuelve el valor
// Tu código:
function divide(x, y) {
  return x / y;
}
// Devuelve "true" si "x" e "y" son iguales
// De lo contrario, devuelve "false"
// Tu código: 


function sonIguales(x, y) {
  if (x==y) {
    return true;
}
  return false; 
}
// Devuelve "true" si las dos strings tienen la misma longitud
// De lo contrario, devuelve "false"
// Tu código:
function tienenMismaLongitud(str1, str2) {
 
if (str1==str2) {
  return true;
}
return false;
}
// Devuelve "true" si el argumento de la función "num" es menor que noventa
// De lo contrario, devuelve "false"  // Tu código:
function menosQueNoventa(num) {
 if (num<90) {
  return true;
}
 return false;
}
// Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
// De lo contrario, devuelve "false"
// Tu código:
function mayorQueCincuenta(num) {
  if (num>50) {
    return true;
}
   return false;
}
// Obten el resto de la división de "x" entre "y"
// Tu código:
function obtenerResto(x, y) {
  return (x&y);
}

// Devuelve "true" si "num" es par
// De lo contrario, devuelve "false"
// Tu código:
function esPar(num) {    
  if (num %2==0) {
    return true;
}
  return false;
}
// Devuelve "true" si "num" es impar
// De lo contrario, devuelve "false"
// Tu código:
function esImpar(num) {  
  if (num %2==1) {
    return true;
}
  return false;
}
  
// Devuelve el valor de "num" elevado al cuadrado
// ojo: No es raiz cuadrada!
// Tu código:
function elevarAlCuadrado(num) {
  return (Math.pow(num,2)) ;
}
// Devuelve el valor de "num" elevado al cubo
// Tu código:
function elevarAlCubo(num) {
  return (Math.pow(num,3)) ;
}
// Devuelve el valor de "num" elevado al exponente dado en "exponent"
// Tu código:
function elevar(num, exponent) { 
  return (Math.pow(num,exponent)) ;
}
// Redondea "num" y devuélvelo
// Tu código:
function redondearNumero(num) {
  return (Math.round(num))
}
// Redondea "num" hacia arriba y devuélvelo
// Tu código:
function redondearHaciaArriba(num) { 
 return (Math.ceil(num));
}
// Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
// Ejemplo: "hello world" pasaría a ser "hello world!"
// Tu código:
function agregarSimboloExclamacion(str) {
  console.log ("hola mundo" + " "+ str + " " + "hola mundo" + " " + str +"!"); 
}
// Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
// Ejemplo: "Soy", "Juan " -> "Soy Juan"
// Tu código:
function combinarNombres(nombre, apellido) {
  console.log ("nombre" + " "+ nombre + " " + "apellido" + " " + apellido);   
}
// Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
// "Martin" -> "Hola Martin!"
// Tu código:
function obtenerSaludo(nombre) {
  console.log ("nombre" + " "+ nombre + " " + "Hola" + " " + nombre + "!");   
}
// Retornar el area de un cuadrado teniendo su altura y ancho
// Tu código:
function obtenerAreaRectangulo(alto, ancho) {
 return (alto * ancho); 
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
