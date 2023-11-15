import { IsDecimal, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateServiceDto {
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsDecimal()
    price: number;

    @IsInt()
    categoryId: number;

    @IsNumber()
    orderNumber: number;
}

export class UpdateServiceDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsOptional()
    @IsDecimal()
    price: number;

    @IsInt()
    categoryId: number;

    @IsOptional()
    @IsNumber()
    orderNumber: number;
}
