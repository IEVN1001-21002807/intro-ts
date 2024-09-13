export class CalcularAreas {
    APrisma(base: number, altura: number): number {
        return base * altura;
    }

    APiramide(base: number, altura: number): number {
        return (base * altura) / 2; 
    }

    ACilindro(radio: number, altura: number): number {
        const ABase = 3.1416 * Math.pow(radio, 2);
        const ALateral = 2 * 3.1416 * radio * altura;
        return 2 * ABase + ALateral; 
    }
}
