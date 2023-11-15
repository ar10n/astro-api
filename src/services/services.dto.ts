import { IsDecimal, IsInt, IsOptional, IsString } from 'class-validator';

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
}
