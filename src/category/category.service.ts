import { Injectable,Inject,forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { Category } from './category.interface';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async createCategory(category: Category): Promise<any> {
   if (!category.name) return 'Category name is required'

    // Kiểm tra xem category name đã tồn tại chưa
    const existingCategory = await this.categoryRepository.findOne({
      where: { name: category.name }
    });

    if (existingCategory) return 'ten category ton tai !'

    const newCategory = this.categoryRepository.create(category);
    return await this.categoryRepository.save(newCategory);
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find({relations:['products']});
  }

  async findOne(id: number): Promise<any> {
    return await this.categoryRepository.findOne({ where: { id }});
  }

  async updateCategory(id: number, category: Category): Promise<any> {
    return await this.categoryRepository.update(id, category);
  }

  async deleteCategory(id: number): Promise<any> {
    return await this.categoryRepository.delete(id);
  }
}
