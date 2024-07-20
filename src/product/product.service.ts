import { InjectRepository } from '@nestjs/typeorm';
import { ProductCreateDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { Category } from 'src/category/entities/category.entity';
@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) { }
    async create(productCreateDto: ProductCreateDto) {
        const product = new Product()
        product.name = productCreateDto.name
        product.user = new User();
        product.category = new Category()
        product.categoryId = productCreateDto.categoryId
        product.category.id = productCreateDto.categoryId
        product.user.id = productCreateDto.userId;
        const result = await this.productRepository.save(product)
        return result
    }
    async update(productCreateDto: ProductCreateDto) {
        const product = new Product()
        product.name = productCreateDto.name
        const result = await this.productRepository.save(product)
        return result
    }
    async delete(productId: string) {
        const result = await this.productRepository.softDelete(productId)
        return result
    }
    all() {
        return this.productRepository.find()
    }
    async byProductId(productId: string) {
        const result = await this.productRepository.find({
            where: {
                id: productId
            },
            relations: ['user', 'category']
        })
        return result
    }
    
   async byCategoryId(catId: string) {
        const result = await this.productRepository.find({
            where: {
                categoryId: catId
            },
            relations: ['user', ]
        })
        return result
    }
}
