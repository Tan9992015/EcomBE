import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProductEntity } from './orderProduct.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderProductEntity])],
  controllers: [],
  providers: [],
  exports: [],
})
export class OrderProductModule {}
