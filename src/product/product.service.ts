import { InjectRepository } from "@nestjs/typeorm";
import { ProductEntity } from "./product.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { ProductDto } from "./product.dto";

@Injectable()
export class ProductService {
    constructor(@InjectRepository(ProductEntity)
                private readonly productRepository:Repository<ProductEntity>
            ){}

    async createProduct(product:ProductDto):Promise<any> {
        const newProduct = new ProductEntity()
        newProduct.price = product?.price ?? 0
        newProduct.description = product?.description ?? ''
        newProduct.addedProperty = product?.addedProperty ?? {}
        newProduct.imageUrl = 'testingimageurl.123'

        return await this.productRepository.save(newProduct)
    }
}