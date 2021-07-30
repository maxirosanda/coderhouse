import { Injectable } from '@nestjs/common';
import { Cars } from 'src/interfaces/cars.interface';

@Injectable()
export class CarsService {
    private readonly carsArray:Cars[] = [];

    create(carsNuevo:Cars) {
        this.carsArray.push(carsNuevo);
    }

    findAll(): Cars[] {
        return this.carsArray;
    }
}
