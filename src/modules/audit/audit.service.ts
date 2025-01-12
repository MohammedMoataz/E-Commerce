import { Injectable } from '@nestjs/common';

import { AuditRepository } from './audit.repository';
import { AuditDto } from './dto/audit.dto';

@Injectable()
export class AuditService {
  constructor(
    private readonly auditRepository: AuditRepository
  ) { }

  async create(auditDto: AuditDto) {
    return this.auditRepository.create({
      ...auditDto,
    });
  }

  async findAll() {
    return this.auditRepository.findAll();
  }

  async findOneById(id: number) {
    return this.auditRepository.findOneById(id);
  }
}
