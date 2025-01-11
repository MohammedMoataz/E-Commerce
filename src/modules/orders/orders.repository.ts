import { sql } from "drizzle-orm";

import db from "src/infrastructure/config/db/db.config";
import { Order } from "./entities/order.entity";
import { GenericRepository } from "src/common/repositories/generic.repository";

export class OrdersRepository implements GenericRepository {
    async create(data: typeof Order.$inferInsert) {
        return await db
            .insert(Order)
            .values(data);
    }

    async findAll(): Promise<any> {
        return await db
            .select()
            .from(Order);
    }

    async findOne(id: number): Promise<any> {
        return await db
            .select()
            .from(Order)
            .where(sql`${Order.id} = ${id}`)
    }

    async update(id: number, data: any): Promise<any> {
        return await db
            .update(Order)
            .set({ ...data })
            .where(sql`${Order.id} = ${id}`);
    }

    async remove(id: number): Promise<any> {
        return await db
            .delete(Order)
            .where(sql`${Order.id} = ${id}`);
    }
}