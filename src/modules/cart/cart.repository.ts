import { eq } from "drizzle-orm";

import db from "src/infrastructure/config/db/db.config";
import { Cart } from "./entities/Cart.entity";
import { GenericRepository } from "src/common/repositories/generic.repository";
import { UpdateCartDto } from "./dto/update-cart.dto";

export class CartRepository implements GenericRepository {
    async create(data: typeof Cart.$inferInsert): Promise<any> {
        return await db
            .insert(Cart)
            .values(data)
            .returning();

    }

    async findAll(): Promise<any> {
        return await db
            .select()
            .from(Cart);
    }

    async findOneById(id: number): Promise<any> {
        return await db
            .select()
            .from(Cart)
            .where(eq(Cart.id, id));
    }

    async update(id: number, updateCartDto: UpdateCartDto): Promise<any> {
        updateCartDto['updatedAt'] = Date.now();

        return await db
            .update(Cart)
            .set({ ...updateCartDto })
            .where(eq(Cart.id, id))
            .returning();

    }


    async remove(id: number): Promise<any> {
        return await db
            .delete(Cart)
            .where(eq(Cart.id, id));
    }
}