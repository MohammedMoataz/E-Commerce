import { eq } from "drizzle-orm";

import db from "src/infrastructure/config/db/db.config";
import { Review } from "./entities/review.entity";
import { GenericRepository } from "src/common/repositories/generic.repository";
import { UpdateReviewDto } from "./dto/update-review.dto";

export class ReviewsRepository implements GenericRepository {
    async create(data: typeof Review.$inferInsert): Promise<any> {
        return await db
            .insert(Review)
            .values(data)
            .returning();
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
            .where(eq(Review.id, id));
    }

    async update(id: number, updateReviewDto: UpdateReviewDto): Promise<any> {
        updateReviewDto['updatedAt'] = Date.now();
        return await db
            .update(Review)
            .set({ ...updateReviewDto })
            .where(eq(Review.id, id))
            .returning();
    }

    async remove(id: number): Promise<any> {
        return await db
            .delete(Review)
            .where(eq(Review.id, id));
    }
}