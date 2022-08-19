//Proyecto Pre entrega CoderHouse LorenzoCorbalan



let Objetos=prompt("Que estas buscando?");


if (Objetos=="Mates"){
    console.log("Tenemos stock");
}else{
    console.log("No hay stock")
}

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.22; //Iva en Uruguay
    }
}

const productos = [];
productos.push(new Producto("Set mates", "3000"));
productos.push(new Producto("Mates y Azucarera", "1800"));
productos.push(new Producto("Set de mate y tablita", "2300"));

for (const producto of productos)
    producto.sumaIva();

console.table(productos)





const Productos=[
    {nombre: "Set Mates", precio:3000},
    {nombre: "Mates y Azucarera", precio:1800},
    {nombre: "Set de mate y tablita", precio:2300}
]




    const Mate = Productos.find((mate)=>mate.nombre==="Set Mates")
    const Azucarera = Productos.find((Azucarera)=>Azucarera.nombre==="Mates y Azucarera")
    const Tablita = Productos.find((tablita)=>tablita.nombre==="Set de mate y tablita") 


console.log(Mate)
console.log(Azucarera)
console.log(Tablita)

//Eventos dom

//dom mates

let botonmate=document.getElementById("MatesCarro")



botonmate.onclick = () => {
    console.log("Agregaste un set de mates al carrito");
    carrito.push(Mate);
    
}


botonmate.onmouseover = () => {
    console.log("Desea agregar este producto al carrito?");
    botonmate.className="btn btn-secundary";
}


//dom azucarera

let AzucarCarro=document.getElementById("AzucarCarro")



AzucarCarro.onclick = () => {
    console.log("Agregaste una Azucarera al carrito");
    carrito.push(Azucarera);
    
}


AzucarCarro.onmouseover = () => {
    console.log("Desea agregar este producto al carrito?");
    AzucarCarro.className="btn btn-secundary";
}

//dom tabla

let TablaCarro=document.getElementById("TablaCarro")



TablaCarro.onclick = () => {
    console.log("Agregaste una tabla al carrito");
    carrito.push(Tablita);
    
}


TablaCarro.onmouseover = () => {
    console.log("Desea agregar este producto al carrito?");
    TablaCarro.className="btn btn-secundary";
}

//Pre entrega numero 2
//para visualizar esto se debe ir a "formulario.html" (se puede acceder desde la navbar)


let correo=document.getElementById("correo")
let contrasenia=document.getElementById("contrasenia")

let envio=document.getElementById("formulario");
formulario.addEventListener("submit", mandarFormulario);

function mandarFormulario (ev){
     ev.preventodefault();
     let formulario = e.target 
     console.log(formulario.children[0].value);
     console.log(formulario.children[1].value);
        
    

}












 




