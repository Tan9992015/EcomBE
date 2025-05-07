import { Body, Controller, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductDto } from "./product.dto";

@Controller('product')
export class  ProductController {
    constructor(private readonly productService:ProductService) {}

    @Post('/create')
    async createProduct(@Body() product:ProductDto):Promise<any> {
        return await this.productService.createProduct(product)
    }
}