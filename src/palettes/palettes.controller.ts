import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Query, Request, UseGuards } from '@nestjs/common';
import { PalettesService } from './palettes.service';
import { Palette } from './entities/palette.entity';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UpdateResult } from 'typeorm';
import { UpdatePaletteInputDto } from './dto/update-palette.input.dto';
import { CreatePaletteInputDto } from './dto/create-palette.input.dto';
import { ERoutes } from 'src/utils/enums/routes.enum';
import { EApiTags } from 'src/utils/enums/api-tags.enum';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { PaletteResponseDto } from './dto/palette.response.dto';

@Controller(ERoutes.PALETTES)
@ApiTags(EApiTags.PALETTES)
@UseGuards(AuthGuard)
export class PalettesController {
    constructor(private readonly paletteService: PalettesService) {}

    @Post()
    @ApiOkResponse({ type: PaletteResponseDto, status: HttpStatus.CREATED })
    async createPalette(@Request() request: { userId: string }, @Body() dto: CreatePaletteInputDto): Promise<Palette> {
        return await this.paletteService.createPalette({ ...dto, userId: request.userId });
    }

    @Get('all')
    @ApiOkResponse({ type: PaletteResponseDto, status: HttpStatus.OK })
    async getAllPalettes(@Request() request: { userId: string }): Promise<Palette[]> {
        return await this.paletteService.getAllPalettes(request.userId);
    }

    @Get()
    @ApiOkResponse({ type: PaletteResponseDto, status: HttpStatus.OK })
    async getPaletteById(@Request() request: { userId: string }, @Query('paletteId') id: string): Promise<Palette> {
        return await this.paletteService.getPaletteById({ id, userId: request.userId });
    }

    @Put()
    @ApiOkResponse({ type: PaletteResponseDto, status: HttpStatus.OK })
    async updatePalette(@Request() request: { userId: string }, @Body() dto: UpdatePaletteInputDto): Promise<Palette> {
        return await this.paletteService.updatePalette({ ...dto, userId: request.userId });
    }

    @Delete()
    @ApiOkResponse({ status: HttpStatus.OK })
    async deletePalette(@Request() request: { userId: string }, @Query('paletteId') id: string): Promise<void> {
        await this.paletteService.deletePalette({ id, userId: request.userId });
    }
}
