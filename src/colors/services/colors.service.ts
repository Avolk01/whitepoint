import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Palette } from 'src/palettes/entities/palette.entity';
import { Repository, UpdateResult } from 'typeorm';
import { Color } from '../entities/color.entity';
import { ColorsApiService } from './colors-api.service';

@Injectable()
export class ColorsService {
    constructor(
        @InjectRepository(Color)
        private readonly colorsRepository: Repository<Color>,
        private readonly colorApiService: ColorsApiService,
    ) {}

    public async createColor({ paletteId, userId, hex }: { paletteId: string; userId: string; hex: string }): Promise<Color> {
        const name = await this.colorApiService.getColorName(hex);

        const color = this.colorsRepository.create({ name, paletteId, userId, hex });

        return this.colorsRepository.save(color);
    }

    public async getAllColorsByPaletteId({ paletteId, userId }: { paletteId: string; userId: string }): Promise<Color[]> {
        return this.colorsRepository.find({ where: { paletteId, userId } });
    }

    public async getColorById({ id, userId }: { id: string; userId: string }): Promise<Color> {
        return this.colorsRepository.findOne({ where: { id, userId } });
    }

    public async updateColor({
        id,
        hex,
        userId,
        paletteId,
    }: {
        id: string;
        userId: string;
        hex?: string;
        paletteId?: string;
    }): Promise<Color> {
        const name = await this.colorApiService.getColorName(hex);

        const data = { id, userId, hex, paletteId, name };

        return this.colorsRepository.save(data);
    }

    public async deleteColor({ id, userId }: { id: string; userId: string }): Promise<void> {
        await this.colorsRepository.delete({ id, userId });
    }
}
