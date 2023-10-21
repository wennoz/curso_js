/* 📌 Operadores Aritmeticos
	=	Operador de asignación. Se usa para asignar valores a una variable
	+	Suma
	-	Resta
	*	Multiplicación
	/	Division
	%	Modulo
	
*/

const resultado = 10 + 10 ;
const resultado2 = 9 - 3;

// lo que sobra
const resultado3 = 10 % 3;

// ++	Aumento
// --	Disminución
// let numero = 1;
// numero = numero + 1;

// console.log(numero); 

/*📌 Operadores de Asignación
	-=	Resta un numero al valor de una variable.
	*=	Resta un numero al valor de una variable.
	/=	Resta un numero al valor de una variable.
	%=	Obtiene el sobrante de una division y lo asigna a la variable.
*/

// +=	Suma un numero al valor de una variable.

let numero = 10;
numero += 5;
console.log(numero); 

/* 📌 Operadores de Comparación:
Nos permiten comparar valores
	==		Igual que
	===		Igual en valor y tipo de valor
	!=		Diferente
	!==		Diferente en valor y diferente en typo
	>		Mayor que
	<		Menor que
	>=		Mayor o igual que
	<=		Menor o igual que
	?		Operador ternario
*/

// const resultado = 5 > 1; // true
// const resultado = 20 <= 20; // true
// const resultado = 10 == 10; // True (Solo compara el valor)
// const resultado = 10 === '10'; // false (compara si el valor es igual y si el tipo es igual)

// ? Operador ternario
const result = 7 > 10 ? 'El primer valor es mayor que el segundo' : 'El segundo valor es mayor que el primero';
console.log(result);