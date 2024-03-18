import { Module } from '@nestjs/common';
import { ColorsService } from './services/colors.service';
import { ColorsController } from './colors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Color } from './entities/color.entity';
import { ColorsApiService } from './services/colors-api.service';
import { User } from 'src/auth/entities/user.entity';
import { TokenService } from 'src/auth/services/token.service';

@Module({
    imports: [TypeOrmModule.forFeature([Color, User])],
    providers: [ColorsService, ColorsApiService, TokenService],
    controllers: [ColorsController],
})
export class ColorsModule {}
