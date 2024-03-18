import { Module } from '@nestjs/common';
import { PalettesController } from './palettes.controller';
import { PalettesService } from './palettes.service';
import { Palette } from './entities/palette.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { TokenService } from 'src/auth/services/token.service';

@Module({
    imports: [TypeOrmModule.forFeature([Palette, User])],
    controllers: [PalettesController],
    providers: [PalettesService, TokenService],
})
export class PalettesModule {}
