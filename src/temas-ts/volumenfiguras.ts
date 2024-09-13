import { CalcularAreas } from './areasfiguras'; 

class CalcularVolumenes extends CalcularAreas {
    VolPrisma(base: number, altura: number, profundidad: number): number {
        const ABase = this.APrisma(base, altura);
        return ABase * profundidad; 
    }

    
    VolPiramide(base: number, altura: number, profundidad: number): number {
        const ABase = this.APiramide(base, altura);
        return (ABase * profundidad) / 3; 
    }

    
    VolCilindro(radio: number, altura: number): number {
        const ABase = 3.1416 * Math.pow(radio, 2); 
        return ABase * altura; 
    }
}

const volumen = new CalcularVolumenes();

console.log("1 Volumen prisma: ", volumen.VolPrisma(22, 25, 28));
console.log("2 Volumen piramide: ", volumen.VolPiramide(14, 17, 20));
console.log("3 Volumen cilindro: ", volumen.VolCilindro(15, 27));
