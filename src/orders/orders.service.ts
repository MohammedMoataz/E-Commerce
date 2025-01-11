import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PaymentService } from './payments/paypal/payment.service';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(
    @Inject()
    private readonly paymentService: PaymentService,
    @Inject()
    private readonly ordersRepository: OrdersRepository
  ) { }

  async create(createOrderDto: CreateOrderDto) {
    return await this.ordersRepository.create(createOrderDto)
  }

  async findAll() {
    return await this.ordersRepository.findAll()
  }

  async findOne(id: number) {
    return await this.ordersRepository.findOne(id);
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.ordersRepository.update(id, updateOrderDto);
  }

  async remove(id: number) {
    return await this.ordersRepository.remove(id);
  }
}
