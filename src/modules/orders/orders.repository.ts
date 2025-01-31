import { eq } from "drizzle-orm";

import db from "src/infrastructure/config/db/db.config";
import { Order } from "./entities/Order.entity";
import { GenericRepository } from "src/common/repositories/generic.repository";
import { UpdateOrderDto } from "./dto/update-order.dto";

export class OrdersRepository implements GenericRepository {
    async create(data: typeof Order.$inferInsert): Promise<any> {
        return await db
            .insert(Order)
            .values(data)
            .returning();
    }

    async findAll(): Promise<any> {
        return await db
            .select()
            .from(Order);
    }

    async findOneById(id: number): Promise<any> {
        return await db
            .select()
            .from(Order)
            .where(eq(Order.id, id));
    }

    async update(id: number, updateOrderDto: UpdateOrderDto): Promise<any> {
        updateOrderDto['updatedAt'] = Date.now();
        return await db
            .update(Order)
            .set({ ...updateOrderDto })
            .where(eq(Order.id, id))
            .returning();
    }


    async remove(id: number): Promise<any> {
        return await db
            .delete(Order)
            .where(eq(Order.id, id));
    }
}