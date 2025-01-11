import { sql } from "drizzle-orm";
import db from "../infrastructure/config/db/db.config";
import { GenericRepository } from "src/common/repositories/generic.repository";
import { OrdersEntity } from "./entities/orders.entity";

export class OrdersRepository implements GenericRepository {
    async create(data: typeof OrdersEntity.$inferInsert) {
        return await db
            .insert(OrdersEntity)
            .values(data);
    }

    async findAll(): Promise<any> {
        return await db
            .select()
            .from(OrdersEntity);
    }

    async findOne(id: number): Promise<any> {
        return await db
            .select()
            .from(OrdersEntity)
            .where(sql`${OrdersEntity.id} = ${id}`)
    }

    async update(id: number, data: any): Promise<any> {
        return await db
            .update(OrdersEntity)
            .set({ ...data, })
            .where(sql`${OrdersEntity.id} = ${id}`);
    }

    async remove(id: number): Promise<any> {
        return await db
            .delete(OrdersEntity)
            .where(sql`${OrdersEntity.id} = ${id}`);
    }
}