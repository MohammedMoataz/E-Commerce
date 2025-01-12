import { eq } from "drizzle-orm";

import db from "src/infrastructure/config/db/db.config";
import { Category } from "./entities/category.entity";
import { GenericRepository } from "src/common/repositories/generic.repository";
import { UpdateCategoryDto } from "./dto/update-category.dto";

export class CategoriesRepository implements GenericRepository {
    async create(data: typeof Category.$inferInsert) {
        return await db
            .insert(Category)
            .values(data);
    }

    async findAll(): Promise<any> {
        return await db
            .select()
            .from(Category);
    }

    async findOneById(id: number): Promise<any> {
        return await db
            .select()
            .from(Category)
            .where(eq(Category.id, id));
    }

    async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<any> {
        return await db
            .update(Category)
            .set({ ...updateCategoryDto })
            .where(eq(Category.id, id));
    }


    async remove(id: number): Promise<any> {
        return await db
            .delete(Category)
            .where(eq(Category.id, id));
    }
}