import { eq } from "drizzle-orm";

import db from "src/infrastructure/config/db/db.config";
import { ProductImage } from "./entities/product_images.entity";
import { GenericRepository } from "src/common/repositories/generic.repository";
import { DeleteProductImageDto } from "./dto/delete-product_image.dto";

export class ProductsImagesRepository implements GenericRepository {
    async create(data: typeof ProductImage.$inferInsert) {
        return await db
            .insert(ProductImage)
            .values(data);
    }

    async findAll(): Promise<any> {
        return await db
            .select()
            .from(ProductImage);
    }

    async findOneById(id: number): Promise<any> {
        return await db
            .select()
            .from(ProductImage)
            .where(eq(ProductImage.id, id));
    }

    async update(id: number, deleteProductImageDto: DeleteProductImageDto): Promise<any> {
        return await db
            .update(ProductImage)
            .set({ ...deleteProductImageDto })
            .where(eq(ProductImage.id, id));
    }

    async remove(id: number): Promise<any> {
        return await db
            .delete(ProductImage)
            .where(eq(ProductImage.id, id));
    }
}