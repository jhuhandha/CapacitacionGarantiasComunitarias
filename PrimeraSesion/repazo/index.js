// LET - VAR - CONST
// var variable = 5;
// let variable2 = 5;

// const variable3 = 6;

// var variable = "Juan";
// // let variable2 = "Juan";

// function hola(){
//     let variable2 = "Juan";
// }

// hola();
// console.log(variable2);

// Templates Literales
// let nombre_apellido = null;
// let edad = 25;

// nombre_apellido = "Juan "+"'"+" David "+"'"+edad;



// nombre_apellido = `
//     Juan 'David' ${edad}
// `

// console.log(nombre_apellido)

//Destructuración de Objetos
// let persona = {
//     nombre : "Juan",
//     apellido: "David",
//     edad: 25,
//     color: {
//         nombre_color : "rojo"
//     },
//     saludar : function(){
//         return "Hola";
//     }
// }

// // let nombre = persona.nombre;
// // let apellido = persona.apellido;

// let {nombre, apellido, edad, saludar, color} = persona;
// let {nombre_color} = color;
// console.log(nombre)
// console.log(color.nombre)
// console.log(saludar());

// Funciones de Flecha

// function saludar(nombre){
//     return `Hola ${nombre}`;
// }

// // let saludar = nombre => nombre;

// let sumar = (a, b) => {
//     console.log(this);
//     return a+b;
// }


// console.log(sumar(5, 5), saludar());

// Callbacks

// let saludar = (nombre, callback) => {
//     setTimeout(()=>{
//         let saluda = `Hola ${nombre}`;
//         callback(saluda);
//     }, 5000);
// }

// saludar("Juan", resultado =>{
//     console.log(resultado)
// });

// let chao = (nombre) => {
//     setTimeout(()=>{
//         let c = `Chao ${nombre}`;
//         return c;
//     }, 5000);
// }

// console.log(chao("Juan"))

// console.log("continuar")


//Promesas

// var p1 = new Promise((resolve, reject) => { 
// setTimeout(resolve, 5000, "one"); 
// }); 
// var p2 = new Promise((resolve, reject) => { 
// setTimeout(resolve, 4000, "two"); 
// });
// var p3 = new Promise((resolve, reject) => {
// setTimeout(resolve, 3000, "three");
// });
// var p4 = new Promise((resolve, reject) => {
// setTimeout(resolve, 1000, "four");
// });
// var p5 = new Promise((resolve, reject) => {
// reject("p5");
// });

// Promise.all([p1, p2, p3, p4, p5]).then(values => { 
// console.log(values);
// }, reason => {
// console.log(reason)
// });

// let saludar = (nombre) =>{
//     return new Promise((b, m)=>{
//         if(nombre == null){
//             m("Nombre no valido");
//         }else{
//             if(nombre.length < 4){
//                 m("Nombre no valido");
//             }else{
//                 b(`Hola ${nombre}`);
//             }
//         }
//     });
// }

// saludar("Juan").then(respuesta=>{
//     console.log(respuesta)

// }).catch(error=>{
//     console.log(error)
// })



// Async Await

// let saludar = (nombre) =>{
//     return new Promise((b, m)=>{
//         if(nombre == null){
//             m("Nombre no valido");
//         }else{
//             if(nombre.length < 4){
//                 m("Nombre no valido");
//             }else{
//                 setTimeout(()=>{
//                     b(`Hola ${nombre}`);
//                 }, 5000)
//             }
//         }
//     });
// }

// let normal = async () => {
//     let saludo = null;
//     try{
//         saludo = await saludar("Juan");
//     }catch(e){
//         console.log(e)
//     }
//     console.log(`${saludo} Bienvenido`);
// }
// normal();









