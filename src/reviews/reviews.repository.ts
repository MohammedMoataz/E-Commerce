import { UUID } from "crypto";
import { sql } from "drizzle-orm";
import db from "../infrastructure/config/db/db.config";
import { GenericRepository } from "src/common/repositories/generic.repository";
import { ReviewsEntity } from "./entities/reviews.entity";

export class ReviewsRepository implements GenericRepository {
    async create(data: typeof ReviewsEntity.$inferInsert) {
        return await db
            .insert(ReviewsEntity)
            .values(data);
    }

    async findAll(): Promise<any> {
        return await db
            .select()
            .from(ReviewsEntity);
    }

    async findOne(id: UUID): Promise<any> {
        return await db
            .select()
            .from(ReviewsEntity)
            .where(sql`${ReviewsEntity.id} = ${id}`)
    }

    async update(id: UUID, data: any): Promise<any> {
        return await db
            .update(ReviewsEntity)
            .set({ ...data, })
            .where(sql`${ReviewsEntity.id} = ${id}`);
    }

    async remove(id: UUID): Promise<any> {
        return await db
            .delete(ReviewsEntity)
            .where(sql`${ReviewsEntity.id} = ${id}`);
    }
}