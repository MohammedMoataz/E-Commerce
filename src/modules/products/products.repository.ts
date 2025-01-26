import { eq } from "drizzle-orm";

import db from "src/infrastructure/config/db/db.config";
import { Product } from "./entities/product.entity";
import { GenericRepository } from "src/common/repositories/generic.repository";
import { UpdateProductDto } from "./dto/update-product.dto";

export class ProductsRepository implements GenericRepository {
    async create(data: typeof Product.$inferInsert): Promise<any> {
        return await db
            .insert(Product)
            .values(data)
            .returning();
    }

    async findAll(): Promise<any> {
        return await db
            .select()
            .from(Product);
    }

    async findOneById(id: number): Promise<any> {
        return await db
            .select()
            .from(Product)
            .where(eq(Product.id, id));
    }

    async update(id: number, updateProductDto: UpdateProductDto): Promise<any> {
        updateProductDto['updatedAt'] = Date.now();
        return await db
            .update(Product)
            .set({ ...updateProductDto })
            .where(eq(Product.id, id))
            .returning();
    }


    async remove(id: number): Promise<any> {
        return await db
            .delete(Product)
            .where(eq(Product.id, id));
    }
}