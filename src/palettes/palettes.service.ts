import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Palette } from './entities/palette.entity';

@Injectable()
export class PalettesService {
    constructor(
        @InjectRepository(Palette)
        private readonly palettesRepository: Repository<Palette>,
    ) {}

    public async createPalette({ name, userId }: { name: string; userId: string }): Promise<Palette> {
        const palette = this.palettesRepository.create({ name, userId });

        return this.palettesRepository.save(palette);
    }

    public async getAllPalettes(userId: string): Promise<Palette[]> {
        return this.palettesRepository.find({ where: { userId } });
    }

    public async getPaletteById({ id, userId }: { id: string; userId: string }): Promise<Palette> {
        return this.palettesRepository.findOne({ where: { id, userId } });
    }

    public async updatePalette({ id, name, userId }: { id: string; name: string; userId: string }): Promise<Palette> {
        const palette = { id, name, userId };
        return await this.palettesRepository.save(palette);
    }

    public async deletePalette({ id, userId }: { id: string; userId: string }): Promise<void> {
        await this.palettesRepository.delete({ id, userId });
    }
}
