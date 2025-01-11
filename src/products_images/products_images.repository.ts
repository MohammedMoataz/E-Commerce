import { UUID } from "crypto";
import { sql } from "drizzle-orm";
import db from "../infrastructure/config/db/db.config";
import { GenericRepository } from "src/common/repositories/generic.repository";
import { ProductsImagesEntity } from "./entities/products_images.entity";

export class ProductsImagesRepository implements GenericRepository {
    async create(data: typeof ProductsImagesEntity.$inferInsert) {
        return await db
            .insert(ProductsImagesEntity)
            .values(data);
    }

    async findAll(): Promise<any> {
        return await db
            .select()
            .from(ProductsImagesEntity);
    }

    async findOne(id: UUID): Promise<any> {
        return await db
            .select()
            .from(ProductsImagesEntity)
            .where(sql`${ProductsImagesEntity.id} = ${id}`)
    }

    async update(id: UUID, data: any): Promise<any> {
        return await db
            .update(ProductsImagesEntity)
            .set({ ...data, })
            .where(sql`${ProductsImagesEntity.id} = ${id}`);
    }

    async remove(id: UUID): Promise<any> {
        return await db
            .delete(ProductsImagesEntity)
            .where(sql`${ProductsImagesEntity.id} = ${id}`);
    }
}