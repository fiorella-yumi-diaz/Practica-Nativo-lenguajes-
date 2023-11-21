function hello () {
    return "hola mundo"
}
hello()
console.log(hello());

function number () {
    return 12345
}
const val = number()
console.log(val);

//retornar una funcion de otra funcion  (PROGRAMACIÓN FUNCIONAL)

function retornar () {
    return function suma (a, b) {
        return a + b;
    }
}
// toma el valor de la funcion el valor de la funcion suma
const valor = retornar()
console.log(valor(3,3))
//paso valor  por defectos a los parametros 
function data (names = "diana", apellido = "mayta") {
    return "NOMBRE: " + names + apellido
}
const foo = data ("fiorella", "diaz")
console.log(foo);




//OBJETOS 
const comida = {
    //properties === propiedades
    entrada: "gelatina",
    bebida: "tamarindo",
    menu : ["pollo horneado","fideos","pizza"],
    // methods === metodos 
    saludo () {
        return "hola"
    }
}
console.log(comida.entrada);
console.log(comida.menu);
console.log(comida.saludo());



const name = "Fiorella";
const apellido = "Diaz"

const datos = {
    name : name,
    apellido : apellido,
}
console.log(datos);


// MAANIPILACION DEL DOM

const title = document.createElement('h1');
title.innerText = "prueba del iner text";

const booton = document.createElement('button');
booton.innerText = "click"
booton.addEventListener('click', function (params) {
    title.innerText = 'texto actualizado';
})

document.body.append(title)
document.body.append(booton)

// OBJETOS PARA PARAMETROS
const juego = {
    mecanico : "Carrusel",
    Hobbie : "el lobo",
}
function imprimir(juego) {
    return "<p>juega con..." + juego.Hobbie + "</p>"
}
console.log(imprimir);
document.body.innerHTML = imprimir(juego)