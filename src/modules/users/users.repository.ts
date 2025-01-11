import { UUID } from "crypto";
import { sql } from "drizzle-orm";

import db from "../../infrastructure/config/db/db.config";
import { GenericRepository } from "src/common/repositories/generic.repository";
import { User } from "./entities/user.entity";
import { IUsersRepository } from "./users.irepository";

export class UsersRepository implements GenericRepository, IUsersRepository {
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

    async findOneById(id: UUID): Promise<any> {
        return await db
            .select()
            .from(User)
            .where(sql`${User.id} = ${id}`)
    }

    async findOneByEmail(email: string): Promise<any> {
        return await db
            .select()
            .from(User)
            .where(sql`${User.email} = ${email}`)
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