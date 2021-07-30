import { ApiProperty } from "@nestjs/swagger";

export class CreateCarsDTO {

    @ApiProperty()
    readonly marca: string;

    @ApiProperty()
    readonly modelo: string;

    @ApiProperty()
    readonly año: number;
}