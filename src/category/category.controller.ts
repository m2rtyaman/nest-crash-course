import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { NestJSResponse } from 'src/common/nestjs.reponse';
import { CreateCategoryDto } from './dto/create-category.dto';
@Controller('category')
@ApiTags("Category")
export class CategoryController {
    constructor(private readonly catService: CategoryService) {

    }
    @Get()
    async getAll() {
        return NestJSResponse.toResponseArray(await this.catService.getAll())
    }
    @Post()
    async create(@Body() category: CreateCategoryDto) {
        return NestJSResponse.toResponse(await this.catService.create(category))
    }
    @Patch('/:categoryId')
    async update(@Param("categoryId") categoryId: string, @Body() category: CreateCategoryDto) {
        return NestJSResponse.toResponse(await this.catService.update(category, categoryId))
    }
    @Delete('/:categoryId')
    async delete(@Param("categoryId") categoryId: string) {
        return NestJSResponse.toResponse(await this.catService.delete(categoryId))
    }

}

