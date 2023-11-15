import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto, UpdateCategoryDto } from './categories.dto';

@Injectable()
export class CategoriesService {
    constructor(private prisma: PrismaService) {}

    async create(data: CreateCategoryDto): Promise<Category> {
        return this.prisma.category.create({ data });
    }

    async getAll(): Promise<Category[]> {
        return this.prisma.category.findMany();
    }

    async getOne(id: number): Promise<Category> {
        return this.prisma.category.findUnique({ where: { id } });
    }

    async update(id: number, data: UpdateCategoryDto): Promise<Category> {
        return this.prisma.category.update({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<Category> {
        return this.prisma.category.delete({ where: { id } });
    }
}
