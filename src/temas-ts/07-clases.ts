class Persona{
    nombre:string;
    edad:number;
    constructor(nombre:string,edad1:number,){
        this.nombre = nombre;
        this.edad = edad1;
    }
    imprimir():void{
        console.log(`Hola, Mi nombre es ${this.nombre} y tengo ${this.edad}`)
    }
}

let persona1 = new Persona('Juan', 30);
console.log(persona1)