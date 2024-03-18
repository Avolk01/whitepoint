import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateColorInputDto {
    @ApiProperty({ description: `color's palette id`, example: `some_random_postgres_id` })
    @IsNotEmpty()
    @IsString()
    paletteId: string;

    @ApiProperty({ description: `color's hex`, example: `#FFFFFF` })
    @IsNotEmpty()
    @IsString()
    hex: string;
}
