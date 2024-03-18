import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PalettesModule } from './palettes/palettes.module';
import { ColorsModule } from './colors/colors.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env.development',
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                port: +configService.get('DB_PORT'),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_NAME'),
                entities: [`dist/**/*.entity{.ts,.js}`],
                migrations: ['dist/**/migrations/*{.ts,.js}'],
                seeds: ['dist/**/seeds/*{.ts,.js}'],
            }),
            inject: [ConfigService],
        }),
        AuthModule,
        PalettesModule,
        ColorsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
