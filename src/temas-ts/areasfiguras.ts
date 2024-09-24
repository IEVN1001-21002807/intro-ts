export class CalcularAreas {
    private base: number;
    private altura: number;
    private radio: number;

    constructor(base: number, altura: number, radio: number) {
        this.base = base;
        this.altura = altura;
        this.radio = radio;
    }

    APrisma(): number {
        return this.base * this.altura;
    }

    APiramide(): number {
        return (this.base * this.altura) / 2;
    }

    ACilindro(): number {
        const ABase = Math.PI * Math.pow(this.radio, 2);
        const ALateral = 2 * Math.PI * this.radio * this.altura;
        return 2 * ABase + ALateral;
    }

    imprimirAreas(): { APrisma: number, APiramide: number, ACilindro: number } {
        const areaPrisma = this.APrisma();
        console.log(`Área del Prisma: ${areaPrisma}`);

        const areaPiramide = this.APiramide();
        console.log(`Área de la Pirámide: ${areaPiramide}`);

        const areaCilindro = this.ACilindro();
        console.log(`Área del Cilindro: ${areaCilindro}`);

        return { APrisma: areaPrisma, APiramide: areaPiramide, ACilindro: areaCilindro };
    }
}
