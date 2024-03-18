import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PaletteResponseDto {
    @ApiProperty({ description: `palette's id`, example: `some_random_postgres_id` })
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty({ description: `palette's name`, example: `Палитра` })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ description: `palette's user id`, example: `some_random_postgres_id` })
    @IsNotEmpty()
    @IsString()
    userId: string;
}
