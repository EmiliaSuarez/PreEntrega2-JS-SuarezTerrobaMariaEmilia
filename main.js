
//INGRESO DE USUARIO

let edad = prompt("Por favor ingresá tu edad 👇🏼");

if (edad>=16){
    alert("Puedes ingresar 😁");
} else {
    alert("Lo siento, no puedes ingresar 🙁");
}

const nombre = prompt("Ingrese su nombre de usuario");
const pass = parseInt(prompt("Elija una constraseña numérica"));
alert("Muchas gracias, para validar su información ingrese nuevamente su usuario y contraseña.");
let usuario = prompt("Nombre de usuario");
let clave = parseInt(prompt("Contraseña"));

//ACCESO 

for(let i=0; i<=2; i++){
    if(nombre==usuario && pass==clave){
        alert(`Hola ${nombre}👋🏼 Bienvenido a nuestro restaurante DE BOCA EN BOCA 😀`);
        break;
    } else{
        alert("Usuario o contraseña incorrectos. Por favor verificá tus datos.");
        usuario= prompt("Nombre de usuario");
        clave= parseInt(prompt("Constraseña"));
    }
}

//MENÚ RESTAURANTE

class Producto {
    constructor(nombre2, precio){
        this.nombre2 = nombre2;
        this.precio = precio;
    }
}

const tamales = new Producto ("tamales", 100);
const humitas = new Producto ("humitas", 250);
const hamburguesa = new Producto ("hamburguesa", 180);
const lomito = new Producto ("lomito", 120);

const arrayProductos = [ tamales, humitas, hamburguesa, lomito];
let arrayProducto = [];

let seleccion = prompt("¿Desea ver nuestro menú? Por favor escriba: si o no");

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese correctamente: si o no");
    seleccion = prompt("¿Desea ver nuestro menú? Por favor escriba: si o no");
}
if(seleccion == "si"){
    alert("Nuestras Comidas");
    const todoslosProductos =  arrayProductos.map (
        (Producto) => Producto.nombre2 + " " +  Producto.precio + "$");
    alert(todoslosProductos.join(" - "));
} else if (seleccion == "no"){
    alert("Nos vemos!");
}
while(seleccion != "no"){
    let producto = prompt ("Agrega una comida a tu Cuenta.");
    let precio = 0
    if(producto == "tamales" || producto == "humitas" || producto == "hamburguesa" || producto== "lomito" ){
        switch (producto) {
            case "tamales":
                precio = 100;
                break;
            case "humitas":
                precio = 250;
                break;
            case "hamburguesa":
                precio = 180;
                break;
            case "lomito":
             precio = 120;
                break;
                default:
                break;
        }
    let unidades = parseInt(prompt("cuantas unidades queres llevar?"));
   
    arrayProducto.push({producto, unidades, precio});
    console.log(arrayProducto)}
     else {
        alert("no contamos con ese producto");
    }

seleccion = prompt("Desea seguir comprando? si o no");
while(seleccion === "no"){
    alert("gracias por la compra");
    arrayProducto.forEach((arrayProductoFinal) =>{
        console.log(`producto: ${arrayProductoFinal.producto}, unidades: ${arrayProductoFinal.unidades}, total a pagar por podructo ${arrayProductoFinal.unidades * arrayProductoFinal.precio}`);
        });
    break;
}
}
const total = arrayProducto.reduce((acc, el)=> acc + el.precio * el.unidades, 0);
alert(`El total a pagar es: ${total}`);
alert("Muchas gracias por confiar en nosotros. Nos vemos!👋🏼");




