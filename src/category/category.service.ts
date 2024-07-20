import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { isDefined } from 'class-validator';
import { categoryNotFoundExteption } from 'src/common/exceptions/category-notfound.exception';

@Injectable()
export class CategoryService {


    constructor(
        @InjectRepository(Category)
        private readonly catRepo: Repository<Category>
    ) { }
    async getAll() {
        const result = await this.catRepo.find()
        return result
    }
    async create(category: CreateCategoryDto) {
        const newCat = new Category();
        newCat.name = category.name;
        return await this.catRepo.save(newCat)
    }
    async update(category: CreateCategoryDto, categoryId: string) {
        const findCat = await this.catRepo.findOne({
            where: {
                id: categoryId
            }
        })
        if (isDefined(findCat)) {
            findCat.name = category.name;
            return await this.catRepo.save(findCat)
        } else {
            throw new categoryNotFoundExteption(categoryId)
        }
    }
    async delete(categoryId: string) {
        const result = this.catRepo.softDelete(categoryId)
        return result
    }
}
