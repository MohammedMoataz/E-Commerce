import { Injectable } from '@nestjs/common';

import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    private readonly orderRepository: OrdersRepository
  ) { }

  async create(createOrderDto: CreateOrderDto) {
    return this.orderRepository.create({
      ...createOrderDto,
    });
  }

  async findAll() {
    return this.orderRepository.findAll();
  }

  async findOneById(id: number) {
    return this.orderRepository.findOneById(id);
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update(id, updateOrderDto);
  }

  async remove(id: number) {
    return this.orderRepository.remove(id);
  }
}
