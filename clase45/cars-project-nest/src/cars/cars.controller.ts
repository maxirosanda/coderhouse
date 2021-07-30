import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Cars } from 'src/interfaces/cars.interface';
import { CreateCarsDTO } from 'src/DTO/create-cars.dto';

@Controller('cars')
export class CarsController {

    constructor(private readonly carsService:CarsService) {};

    @Post()    
    create(@Body() car:CreateCarsDTO):String {
        this.carsService.create(car);
        return "Creado";
    }

    @Get()
    async findAll(): Promise<Cars[]> {
        return this.carsService.findAll();
    }
}