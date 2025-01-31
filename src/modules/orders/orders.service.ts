import { Injectable } from '@nestjs/common';

import { OrdersRepository } from './orders.repository';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderDto } from './dto/order.dto';
import { plainToClass } from 'class-transformer';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    private readonly orderRepository: OrdersRepository
  ) { }

  async create(createOrderDto: CreateOrderDto): Promise<OrderDto> {
    return await this.orderRepository.create({
      ...createOrderDto,
    });
  }

  async findAll(): Promise<OrderDto[]> {
    const orders = await this.orderRepository.findAll();
    let OrdersDto: OrderDto[];

    if (orders.length)
      OrdersDto = orders.map((order: typeof Order) => plainToClass(OrderDto, order));

    return await OrdersDto;
  }

  async findOneById(id: number): Promise<OrderDto> {
    return await this.orderRepository.findOneById(id);
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<OrderDto> {
    return await this.orderRepository.update(id, updateOrderDto);
  }

  async remove(id: number): Promise<string> {
    const result = await this.orderRepository.remove(id);
    return result.rowCount > 0
      ? "Deleted successfully"
      : "Deleted failed";
  }
}

