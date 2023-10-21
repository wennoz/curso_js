// Tipos de datos que podemos guardar en las variables:
// 1.string - Cadena de Texto
const nombre = 'carlos';
// para poder usar las mismas comillas un truco es poner el \ para saltar la linea
const parrafo = 'este es un \'parrafo\'';

// 2.number - Numero
const num = 4;
const num2 = -2.445;

// 3. boolean - Booleano (verdadero o falso)
// const usuarioconectado = false;
const mayorQue = 6 > 2;
console.log(mayorQue);

// 4.array
const arreglo = ['wendy', 20, 'mayo', 2023];
console.log(arreglo);

// 5.object - Objeto
const persona = {
    nombre: 'wendy',
    edad: 20,
    carro: {
        marca: '..',
        color: 'rojo'
    }
}
console.log(persona)

// 6.function - Funciones
function hola(){
    console.log('hola')
}
hola();


