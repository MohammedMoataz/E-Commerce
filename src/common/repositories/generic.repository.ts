import { UUID } from "crypto";

export interface GenericRepository {
    create(data: any): Promise<any>;
    findAll(): Promise<any>;
    findOneById(id: number | UUID): Promise<any>;
    update(id: number | UUID, data: any): Promise<any>;
    remove(id: number | UUID): Promise<any>;
}