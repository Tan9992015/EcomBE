import { ProductEntity } from 'src/product/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany } from 'typeorm';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(()=>ProductEntity,product=>product.category)
  product:ProductEntity[]
}
