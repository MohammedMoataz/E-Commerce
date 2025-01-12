import {
  Controller,
  Get,
  Post,
  Body,
  Param,
} from '@nestjs/common';

import { AuditService } from './audit.service';
import { AuditDto } from './dto/audit.dto';

@Controller('v1/audit/')
export class AuditController {
  constructor(private readonly auditService: AuditService) { }

  @Post()
  create(@Body() auditDto: AuditDto) {
    return this.auditService.create(auditDto);
  }

  @Get()
  findAll() {
    return this.auditService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.auditService.findOneById(id);
  }
}
