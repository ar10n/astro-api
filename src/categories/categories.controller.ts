import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from './categories.dto';
import { Category } from '@prisma/client';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) {}

    @Post('create')
    async create(@Body() data: CreateCategoryDto): Promise<Category> {
        return this.categoriesService.create(data);
    }

    @Get()
    async getAll(): Promise<Category[]> {
        return this.categoriesService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number): Promise<Category> {
        return this.categoriesService.getOne(id);
    }

    @Patch(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() data: UpdateCategoryDto,
    ): Promise<Category> {
        return this.categoriesService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<Category> {
        return this.categoriesService.delete(id);
    }
}
