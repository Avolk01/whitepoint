import { Body, Controller, Delete, Get, HttpStatus, Post, Put, Query, Request, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UpdateResult } from 'typeorm';
import { ColorsService } from './services/colors.service';
import { Color } from './entities/color.entity';
import { CreateColorInputDto } from './dto/create-color.input.dto';
import { UpdateColorInputDto } from './dto/update-color.input.dto';
import { ERoutes } from 'src/utils/enums/routes.enum';
import { EApiTags } from 'src/utils/enums/api-tags.enum';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ColorResponseDto } from './dto/color.response.dto';

@Controller(ERoutes.COLORS)
@ApiTags(EApiTags.COLORS)
@UseGuards(AuthGuard)
export class ColorsController {
    constructor(private readonly colorsService: ColorsService) {}

    @Post()
    @ApiOkResponse({ type: ColorResponseDto, status: HttpStatus.CREATED })
    async createColor(@Request() request: { userId: string }, @Body() dto: CreateColorInputDto): Promise<Color> {
        return await this.colorsService.createColor({ ...dto, userId: request.userId });
    }

    @Get('palettes')
    @ApiOkResponse({ type: ColorResponseDto, status: HttpStatus.OK })
    async getAllColorByPaletteID(@Request() request: { userId: string }, @Query('paletteId') paletteId: string): Promise<Color[]> {
        return await this.colorsService.getAllColorsByPaletteId({ userId: request.userId, paletteId });
    }

    @Get()
    @ApiOkResponse({ type: ColorResponseDto, status: HttpStatus.OK })
    async getColorById(@Request() request: { userId: string }, @Query('colorId') id: string): Promise<Color> {
        return await this.colorsService.getColorById({ id, userId: request.userId });
    }

    @Put()
    @ApiOkResponse({ type: ColorResponseDto, status: HttpStatus.OK })
    async updateColor(@Request() request: { userId: string }, @Body() dto: UpdateColorInputDto): Promise<Color> {
        return await this.colorsService.updateColor({ ...dto, userId: request.userId });
    }

    @Delete()
    @ApiOkResponse({ status: HttpStatus.OK })
    async deleteColor(@Request() request: { userId: string }, @Query('colorId') id: string): Promise<void> {
        await this.colorsService.deleteColor({ id, userId: request.userId });
    }
}
