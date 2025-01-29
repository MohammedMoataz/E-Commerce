import { eq } from "drizzle-orm";

import db from "src/infrastructure/config/db/db.config";
import { ProductImage } from "./entities/product_images.entity";
import { GenericRepository } from "src/common/repositories/generic.repository";

export class ProductsImagesRepository implements GenericRepository {
    async create(data: typeof ProductImage.$inferInsert): Promise<any> {
        return await db
            .insert(ProductImage)
            .values(data)
            .returning();
    }

    async findAll(): Promise<any> {
        return await db
            .select()
            .from(ProductImage);
    }

    async findOneById(id: number): Promise<any> {
        return await db
            .select()
            .from(ProductImage)
            .where(eq(ProductImage.id, id));
    }

    async update(id: number): Promise<any> {
        return await db
            .delete(ProductImage)
            .where(eq(ProductImage.id, id));
    }

    async remove(id: number): Promise<any> {
        return await db
            .delete(ProductImage)
            .where(eq(ProductImage.id, id));
    }
}