import { Body, Controller, Delete, Get, Param, Patch, Post, Put, } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductCreateDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
@ApiTags("product")
export class ProductController {
    constructor(private readonly productService: ProductService) {
    }
    @Get()
    @ApiOperation({
        summary: "Active Products"
    })
    async activeProduct() {
        return await this.productService.all()
    }
    @Get("productId")
    @ApiOperation({
        summary: "Product Detail"
    })
    async byProductId(@Param('productId') productId: string) {
        return await this.productService.byProductId(productId)
    }
    @Get("category/:catId")
    @ApiOperation({
        summary: "Product Detail"
    })
    async byCategoryId(@Param('catId') catId: string) {
        return await this.productService.byCategoryId(catId)
    }
    @Post()
    async create(@Body() productCreateDto: ProductCreateDto) {
        return await this.productService.create(productCreateDto)
    }
    @Patch(":id")
    async update(@Param('id') id: string, @Body() productCreateDto: ProductCreateDto) {
        return await this.productService.update(productCreateDto)
    }
    @Delete(":id")
    async delete(@Param("id") id: string) {
        return await this.productService.delete(id)
    }
}
