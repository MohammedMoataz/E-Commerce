import { eq } from "drizzle-orm";

import db from "src/infrastructure/config/db/db.config";
import { CartItem } from "./entities/cart_item.entity";
import { GenericRepository } from "src/common/repositories/generic.repository";
import { UpdateCartItemDto } from "./dto/update-cart_item.dto";

export class CartItemsRepository implements GenericRepository {
    async create(data: typeof CartItem.$inferInsert): Promise<any> {
        return await db
            .insert(CartItem)
            .values(data)
            .returning();
    }

    async findAll(): Promise<any> {
        return await db
            .select()
            .from(CartItem);
    }

    async findOneById(id: number): Promise<any> {
        return await db
            .select()
            .from(CartItem)
            .where(eq(CartItem.id, id));
    }

    async update(id: number, updateCartItemDto: UpdateCartItemDto): Promise<any> {
        updateCartItemDto['updatedAt'] = Date.now();

        return await db
            .update(CartItem)
            .set(updateCartItemDto)
            .where(eq(CartItem.id, id))
            .returning();
    }

    async remove(id: number): Promise<any> {
        return await db
            .delete(CartItem)
            .where(eq(CartItem.id, id));
    }
}