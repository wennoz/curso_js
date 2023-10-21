// se pueden guardar arreglos dentro de los arreglos
const arreglo = ['texto', 456.10, false, { propiedad: "valor" }, [1, 2, 3]];
console.log(arreglo);

const amigos = ['alejandro', 'manuel', 'cesar'];
console.log(amigos[1]);

const colores = [];
colores [0] = 'rojo';
colores [1] = 'verde';

// para ver cuantos objetos hay en el array se usa length
console.log('el arreglo colores tiene:' + colores.length  +  ' colores');

// push
colores.push('azul');
console.log(colores); 