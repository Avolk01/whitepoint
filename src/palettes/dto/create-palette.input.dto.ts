import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePaletteInputDto {
    @ApiProperty({ description: `palette's name`, example: `Палитра` })
    @IsNotEmpty()
    @IsString()
    name: string;
}
