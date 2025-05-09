import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductDto } from "./product.dto";

@Controller('product')
export class  ProductController {
    constructor(private readonly productService:ProductService) {}

    @Post('/create')
    async createProduct(@Body() product:ProductDto):Promise<any> {
        return await this.productService.createProduct(product)
    }

    @Put('/update/:id')
    async updateProduct(@Body() product:ProductDto,@Param('id') id:string):Promise<any> {
        return await this.productService.updateProduct(Number(id),product)
    }

    @Delete('/delete/:id')
    async softDeleteProduct(@Param('id') id:string):Promise<any> {
        return await this.productService.softDeleteProduct(Number(id))
    }

    @Get('/findProduct/:id')
    async findProductById(@Param('id') id:string):Promise<any> {
        return await this.productService.findProductById(Number(id))
    }

    @Get()
    async paginate(
        @Query('page') page:string,
        @Query('limit') limit:string,
        @Query('productName') productName:string,
        @Query('minPrice') minPrice:string,
        @Query('maxPrice') maxPrice:string,
        @Query('order') order: string = 'ASC'  // Mặc định là ASC nếu không có tham số order
    ) {
        // th1 không truyền tham số gì
        if(!productName && !minPrice && !maxPrice) return await this.productService.paginateProduct({page:Number(page) ?? 1,limit:Number(limit) ?? 5,route:'http://localhost:3000/product'})
        // th2 tìm theo tên
        else if(!minPrice && !maxPrice) return await this.productService.paginateProductByName({page:Number(page) ?? 1,limit:Number(limit) ?? 5,route:'http://localhost:3000/product'},productName)
        // th3 tìm theo khoảng giá
        else if(!productName) return await this.productService.paginateProductByPriceRange({page:Number(page) ?? 1,limit:Number(limit) ?? 5,route:'http://localhost:3000/product'},Number(minPrice),Number(maxPrice),order)
        // th4 tìm theo tên và khoảng giá
        else return await this.productService.paginateProductByPriceRangeAndName({page:Number(page) ?? 1,limit:Number(limit) ?? 5,route:'http://localhost:3000/product'},productName,Number(minPrice),Number(maxPrice),order)
    }
}