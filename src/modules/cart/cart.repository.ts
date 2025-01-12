import { eq } from "drizzle-orm";

import db from "src/infrastructure/config/db/db.config";
import { Cart } from "./entities/Cart.entity";
import { GenericRepository } from "src/common/repositories/generic.repository";
import { UpdateCartDto } from "./dto/update-cart.dto";

export class CartRepository implements GenericRepository {
    async create(data: typeof Cart.$inferInsert) {
        return await db
            .insert(Cart)
            .values(data);
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
        return await db
            .update(Cart)
            .set({ ...updateCartDto })
            .where(eq(Cart.id, id));
    }


    async remove(id: number): Promise<any> {
        return await db
            .delete(Cart)
            .where(eq(Cart.id, id));
    }
}