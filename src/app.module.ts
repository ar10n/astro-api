import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { PrismaModule } from './prisma/prisma.module';
import { ServicesModule } from './services/services.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        UsersModule,
        CategoriesModule,
        ServicesModule,
        PrismaModule,
    ],
})
export class AppModule {}
