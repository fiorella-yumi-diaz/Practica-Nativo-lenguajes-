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

// DESTRUCTURING
const animales = {
    conejo : "Conejo",
    gato : "Gato",
}
function mascotas({conejo}) {
    
    return "<h3>La mascota es un " + conejo + "</h3>"
}
document.body.innerHTML = mascotas(animales)

function names(animales) {
const {conejo, gato} = animales
return conejo + gato;
}

console.log(names(animales));

//FUNCIONES ANONIMAS
console.log(function () {
    return "starting..."
}());
 
const boton = document.createElement("button");
boton.innerText = "Click Me";

boton.addEventListener("click", () => {
    alert("click me")
})
document.body.append(boton)

//FUNCIONES FLECHAS 
function normal (x, y) {
    return x + y
}

const arrowFuction = (x,y) => {
    return x + y
}
const funcionFlecha = () => "HOLA MUNDO";
console.log(funcionFlecha());

// existe un problema con los obejetos
const jota = () => ({hola: "hello", como: "como"})
console.log(jota());

// practicando funciones de suma, un boton que devuelva una suma

const suma = (x, y) => {
    return x + y;
}

const valor1 = document.createElement("input");
const valor2 = document.createElement("input");
const enviar = document.createElement("button");
const resultado = document.createElement("p"); // Elemento para mostrar el resultado

enviar.innerText = "Click Me";
valor1.id = "input1";
valor2.id = "input2";

document.body.append(valor1);
document.body.append(valor2);
document.body.append(enviar);
document.body.append(resultado); // Agregar el elemento para mostrar el resultado

enviar.addEventListener('click', ()=> {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");

    const valorInput1 = parseFloat(input1.value);
    const valorInput2 = parseFloat(input2.value);

});

// crea un campo que devuelva un valor y ese valor se compare y regrese al color de una caja

// Elementos dom
const box = document.createElement("div")
const capoText = document.createElement("input")
const botonColor = document.createElement("button")

botonColor.innerText = "cambia color"
capoText.id = "colo2"


document.body.append(box)
box.append(capoText)
box.append(botonColor)
box.style = "width: 200px"
box.style = "height: 200px"
//funcion de prueba de color
function color(string) {
    if (string === "red"){
        return "red"
    } else if (string === "blue"){
        return "blue"
    } else if ( string === "pink") {
        return "pink"
    } else {
        return "no existe este color"
    }
}

// funcion que proceso datos del input

botonColor.addEventListener("click", () => {
    const colo= document.getElementById("colo2");
    const valorDelInput = colo.value;
    const va = color(valorDelInput)

    box.style = `background: ${va}`
})

