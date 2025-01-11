import { sql } from "drizzle-orm";

import db from "src/infrastructure/config/db/db.config";
import { Review } from "./entities/review.entity";
import { GenericRepository } from "src/common/repositories/generic.repository";
import { UpdateReviewDto } from "./dto/delete-review.dto";

export class ReviewsRepository implements GenericRepository {
    async create(data: typeof Review.$inferInsert) {
        return await db
            .insert(Review)
            .values(data);
    }

    async findAll(): Promise<any> {
        return await db
            .select()
            .from(Review);
    }

    async findOneById(id: number): Promise<any> {
        return await db
            .select()
            .from(Review)
            .where(sql`${Review.id} = ${id}`)
    }

    async update(id: number, data: UpdateReviewDto): Promise<any> {
        return await db
            .update(Review)
            .set({ ...data })
            .where(sql`${Review.id} = ${id}`);
    }

    async remove(id: number): Promise<any> {
        return await db
            .delete(Review)
            .where(sql`${Review.id} = ${id}`);
    }
}