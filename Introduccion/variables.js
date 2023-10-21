//ya no se usa,permitia acceder a ella en cualquiera parte del codigo y traia problemas
var edad = 20;
console.log(edad);

//let y const solo se pueden trabajar dentro de un bloque de codigo 
/*let se le puede asiganar un valor despues de declarada la variable 
EJEMPLO:
let nombre = 'Wendy tatiana';
nombre = 'Nuevo nombre' y esto seria valido
*/
let nombre = 'Wendy tatiana';

//por otro lado const NO se le puede asiganar un valor despues de declarada la variable 
const correo = 'wennch2003@gmail.com';

//ejemplo operacion con variable 

const nombre1 = 'carlos ';
const nombre2 = 'Arturo';
const NombreCompleto = nombre1 + nombre2;
console.log(NombreCompleto);

//en js podemos cambiarle el valor que se le da a la variable y no tendria problema EJEMPLO:
let Mivariable = 'Texto';
Mivariable = 7;
