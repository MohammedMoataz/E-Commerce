import { sql } from "drizzle-orm";

import db from "src/infrastructure/config/db/db.config";
import { ProductImage } from "./entities/product_images.entity";
import { GenericRepository } from "src/common/repositories/generic.repository";

export class ProductsImagesRepository implements GenericRepository {
    async create(data: typeof ProductImage.$inferInsert) {
        return await db
            .insert(ProductImage)
            .values(data);
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
            .where(sql`${ProductImage.id} = ${id}`)
    }

    async update(id: number, data: any): Promise<any> {
        return await db
            .update(ProductImage)
            .set({ ...data })
            .where(sql`${ProductImage.id} = ${id}`);
    }

    async remove(id: number): Promise<any> {
        return await db
            .delete(ProductImage)
            .where(sql`${ProductImage.id} = ${id}`)
    }
}