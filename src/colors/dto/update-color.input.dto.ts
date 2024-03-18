import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateColorInputDto {
    @ApiProperty({ description: `color's id`, example: `some_random_postgres_id` })
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty({ description: `color's palette id`, example: `some_random_postgres_id` })
    @IsOptional()
    @IsString()
    paletteId?: string;

    @ApiProperty({ description: `color's hex`, example: `#FFFFFF` })
    @IsOptional()
    @IsString()
    hex?: string;
}
