import { UUID } from "crypto";
import { sql } from "drizzle-orm";
import db from "../infrastructure/config/db/db.config";
import { GenericRepository } from "src/common/repositories/generic.repository";
import { ProductsEntity } from "./entities/products.entity";

export class ProductsRepository implements GenericRepository {
    async create(data: typeof ProductsEntity.$inferInsert) {
        return await db
            .insert(ProductsEntity)
            .values(data);
    }

    async findAll(): Promise<any> {
        return await db
            .select()
            .from(ProductsEntity);
    }

    async findOne(id: UUID): Promise<any> {
        return await db
            .select()
            .from(ProductsEntity)
            .where(sql`${ProductsEntity.id} = ${id}`)
    }

    async update(id: UUID, data: any): Promise<any> {
        return await db
            .update(ProductsEntity)
            .set({ ...data, })
            .where(sql`${ProductsEntity.id} = ${id}`);
    }

    async remove(id: UUID): Promise<any> {
        return await db
            .delete(ProductsEntity)
            .where(sql`${ProductsEntity.id} = ${id}`);
    }
}