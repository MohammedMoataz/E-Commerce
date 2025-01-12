import { UUID } from "crypto";
import { eq } from "drizzle-orm";

import db from "../../infrastructure/config/db/db.config";
import { GenericRepository } from "src/common/repositories/generic.repository";
import { User } from "./entities/user.entity";
import { IUsersRepository } from "./users.irepository";
import { UpdateUserDto } from "./dto/update-user.dto";

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