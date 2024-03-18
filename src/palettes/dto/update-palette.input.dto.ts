import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdatePaletteInputDto {
    @ApiProperty({ description: `palette's name`, example: `Палитра` })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ description: `palette's id`, example: `some_random_postgres_id` })
    @IsNotEmpty()
    @IsString()
    id: string;
}
