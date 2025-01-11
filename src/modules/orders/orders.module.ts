import { Module } from '@nestjs/common';

import { OrdersRepository } from './orders.repository';
import { OrdersService } from './orders.service';
import { PaymentService } from './payments/paypal/payment.service';
import { OrdersController } from './orders.controller';

@Module({
  controllers: [OrdersController],
  providers: [OrdersRepository, OrdersService, PaymentService],
})
export class OrdersModule {}
