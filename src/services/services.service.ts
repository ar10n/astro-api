import { Injectable } from '@nestjs/common';
import { Service } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto, UpdateServiceDto } from './services.dto';

@Injectable()
export class ServicesService {
    constructor(private prisma: PrismaService) {}

    async create(data: CreateServiceDto): Promise<Service> {
        return this.prisma.service.create({ data });
    }

    async getAll(): Promise<Service[]> {
        return this.prisma.service.findMany();
    }

    async getOne(id: number): Promise<Service> {
        return this.prisma.service.findUnique({ where: { id } });
    }

    async update(id: number, data: UpdateServiceDto): Promise<Service> {
        return this.prisma.service.update({
            where: { id },
            data,
        });
    }

    async delete(id: number): Promise<Service> {
        return this.prisma.service.delete({ where: { id } });
    }
}
