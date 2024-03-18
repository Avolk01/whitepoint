import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ColorResponseDto {
    @ApiProperty({ description: `color's id`, example: `some_random_postgres_id` })
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty({ description: `color's name`, example: `Белый` })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ description: `color's user id`, example: `some_random_postgres_id` })
    @IsNotEmpty()
    @IsString()
    userId: string;

    @ApiProperty({ description: `color's palette id`, example: `some_random_postgres_id` })
    @IsNotEmpty()
    @IsString()
    paletteId: string;

    @ApiProperty({ description: `color's hex`, example: `#FFFFFF` })
    @IsNotEmpty()
    @IsString()
    hex: string;
}
