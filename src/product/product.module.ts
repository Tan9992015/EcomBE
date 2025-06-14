import { forwardRef, Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductEntity } from "./product.entity";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderModule } from "src/order/order.module";
import { CategoryModule } from "src/category/category.module";


@Module({
    imports:[TypeOrmModule.forFeature([ProductEntity]),forwardRef(()=>OrderModule),forwardRef(()=>CategoryModule)],
    controllers:[ProductController],
    providers:[ProductService],
    exports:[ProductService]
})
export class ProductModule {

}