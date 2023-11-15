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
import { ServicesService } from './services.service';
import { CreateServiceDto, UpdateServiceDto } from './services.dto';
import { Service } from '@prisma/client';

@Controller('categories')
export class ServicesController {
    constructor(private readonly servicesService: ServicesService) {}

    @Post('create')
    async create(@Body() data: CreateServiceDto): Promise<Service> {
        return this.servicesService.create(data);
    }

    @Get()
    async getAll(): Promise<Service[]> {
        return this.servicesService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number): Promise<Service> {
        return this.servicesService.getOne(id);
    }

    @Patch(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() data: UpdateServiceDto,
    ): Promise<Service> {
        return this.servicesService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<Service> {
        return this.servicesService.delete(id);
    }
}
