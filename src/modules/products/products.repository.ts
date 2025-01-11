import { UUID } from "crypto";
import { sql } from "drizzle-orm";

import db from "src/infrastructure/config/db/db.config";
import { Product } from "./entities/product.entity";
import { GenericRepository } from "src/common/repositories/generic.repository";

export class ProductsRepository implements GenericRepository {
    async create(data: typeof Product.$inferInsert) {
        return await db
            .insert(Product)
            .values(data);
    }

    async findAll(): Promise<any> {
        return await db
            .select()
            .from(Product);
    }

    async findOne(id: UUID): Promise<any> {
        return await db
            .select()
            .from(Product)
            .where(sql`${Product.id} = ${id}`)
    }

    async update(id: UUID, data: any): Promise<any> {
        return await db
            .update(Product)
            .set({ ...data, })
            .where(sql`${Product.id} = ${id}`);
    }

    async remove(id: UUID): Promise<any> {
        return await db
            .delete(Product)
            .where(sql`${Product.id} = ${id}`);
    }
}