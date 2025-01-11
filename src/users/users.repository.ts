import { UUID } from "crypto";
import { sql } from "drizzle-orm";
import db from "../infrastructure/config/db/db.config";
import { GenericRepository } from "src/common/repositories/generic.repository";
import { UsersEntity } from "./entities/users.entity";

export class UsersRepository implements GenericRepository {
    async create(data: typeof UsersEntity.$inferInsert) {
        return await db
            .insert(UsersEntity)
            .values(data);
    }

    async findAll(): Promise<any> {
        return await db
            .select()
            .from(UsersEntity);
    }

    async findOne(id: UUID): Promise<any> {
        return await db
            .select()
            .from(UsersEntity)
            .where(sql`${UsersEntity.id} = ${id}`)
    }

    async update(id: UUID, data: any): Promise<any> {
        return await db
            .update(UsersEntity)
            .set({ ...data, })
            .where(sql`${UsersEntity.id} = ${id}`);
    }

    async remove(id: UUID): Promise<any> {
        return await db
            .delete(UsersEntity)
            .where(sql`${UsersEntity.id} = ${id}`);
    }
}