import { UUID } from "crypto";
import { eq } from "drizzle-orm";

import db from "../../infrastructure/config/db/db.config";
import { GenericRepository } from "src/common/repositories/generic.repository";
import { User } from "./entities/user.entity";
import { IUsersRepository } from "./users.irepository";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Order } from "../orders/entities/order.entity";
import { Review } from "../reviews/entities/review.entity";
import { Cart } from "../cart/entities/cart.entity";
import { Audit } from "../audit/entities/audit.entity";

export class UsersRepository implements GenericRepository, IUsersRepository {
    async create(data: typeof User.$inferInsert) {
        return await db
            .insert(User)
            .values(data);
    }

    async findAll(): Promise<any> {
        return await db
            .select()
            .from(User)
            .leftJoin(Order, eq(User.id, Order.userId))
            .leftJoin(Review, eq(User.id, Review.clientId))
            .leftJoin(Cart, eq(User.id, Cart.userId))
            .leftJoin(Audit, eq(User.id, Audit.auditBy));
    }

    async findOneById(id: UUID): Promise<any> {
        return await db
            .select()
            .from(User)
            .where(eq(User.id, id));
    }

    async findOneByEmail(email: string): Promise<any> {
        return await db
            .select()
            .from(User)
            .where(eq(User.email, email));
    }

    async update(id: UUID, updateUserDto: UpdateUserDto): Promise<any> {
        return await db
            .update(User)
            .set({ ...updateUserDto })
            .where(eq(User.id, id));
    }

    async remove(id: UUID): Promise<any> {
        return await db
            .delete(User)
            .where(eq(User.id, id));
    }
}