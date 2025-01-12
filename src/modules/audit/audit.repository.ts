import { eq } from "drizzle-orm";

import db from "src/infrastructure/config/db/db.config";
import { Audit } from "./entities/audit.entity";
import { GenericRepository } from "src/common/repositories/generic.repository";

export class AuditRepository implements GenericRepository {
    async create(data: typeof Audit.$inferInsert) {
        return await db
            .insert(Audit)
            .values(data);
    }

    async findAll(): Promise<any> {
        return await db
            .select()
            .from(Audit);
    }

    async findOneById(id: number): Promise<any> {
        return await db
            .select()
            .from(Audit)
            .where(eq(Audit.id, id));
    }

    async update(id: number, data: any): Promise<any> {

    }


    async remove(id: number): Promise<any> {
    
    }
}