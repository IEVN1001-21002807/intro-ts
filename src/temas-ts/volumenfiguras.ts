
import { CalcularAreas } from './areasfiguras';

class CalcularVolumenes extends CalcularAreas {
    private profundidad: number;

    constructor(base: number, altura: number, radio: number, profundidad: number) {
        super(base, altura, radio);
        this.profundidad = profundidad;
    }

    VolPrisma(areaBase: number): number {
        return areaBase * this.profundidad;
    }

    VolPiramide(areaBase: number): number {
        return (areaBase * this.profundidad) / 3;
    }

    VolCilindro(areaBase: number, altura: number): number {
        return areaBase * altura;
    }

    imprimirVolumenes(): void {
        const areas = this.imprimirAreas();

        const volumenPrisma = this.VolPrisma(areas.APrisma);
        console.log(`Volumen del Prisma: ${volumenPrisma}`);

        const volumenPiramide = this.VolPiramide(areas.APiramide);
        console.log(`Volumen de la Pirámide: ${volumenPiramide}`);

        const volumenCilindro = this.VolCilindro(Math.PI * Math.pow(15, 2), 27);
        console.log(`Volumen del Cilindro: ${volumenCilindro}`);
    }
}

const volumen = new CalcularVolumenes(22, 25, 15, 28);
volumen.imprimirVolumenes();





const areas = new CalcularAreas(22, 25, 15);
areas.imprimirAreas();
