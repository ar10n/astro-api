import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    isPayable: boolean;

    @IsNumber()
    orderNumber: number;
}

export class UpdateCategoryDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsOptional()
    @IsBoolean()
    isPayable: boolean;

    @IsOptional()
    @IsNumber()
    orderNumber: number;
}
