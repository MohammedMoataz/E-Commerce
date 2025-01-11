import { UUID } from "crypto";
import { sql } from "drizzle-orm";

import db from "../../infrastructure/config/db/db.config";
import { GenericRepository } from "src/common/repositories/generic.repository";
import { User } from "./entities/user.entity";

export class UsersRepository implements GenericRepository {
    async create(data: typeof User.$inferInsert) {
        return await db
            .insert(User)
            .values(data);
    }

    async findAll(): Promise<any> {
        return await db
            .select()
            .from(User);
    }

    async findOne(id: UUID): Promise<any> {
        return await db
            .select()
            .from(User)
            .where(sql`${User.id} = ${id}`)
    }

    async update(id: UUID, data: any): Promise<any> {
        return await db
            .update(User)
            .set({ ...data, })
            .where(sql`${User.id} = ${id}`);
    }

    async remove(id: UUID): Promise<any> {
        return await db
            .delete(User)
            .where(sql`${User.id} = ${id}`);
    }
}