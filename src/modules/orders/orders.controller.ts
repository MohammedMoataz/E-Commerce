import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Serialize } from 'src/common/interceptors/serialize.interceptor';
import { OrderDto } from './dto/order.dto';

@ApiTags('Orders APIs')
@Controller('v1/orders/')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Serialize(OrderDto)
  @Post()
  async create(@Body() createOrderDto: CreateOrderDto): Promise<OrderDto> {
    return await this.ordersService.create(createOrderDto);
  }

  @Get()
  async findAll(): Promise<OrderDto[]> {
    return await this.ordersService.findAll();
  }

  @Serialize(OrderDto)
  @Get(':id')
  async findOneById(@Param('id') id: number): Promise<OrderDto> {
    return await this.ordersService.findOneById(id);
  }

  @Serialize(OrderDto)
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateOrderDto: UpdateOrderDto): Promise<OrderDto> {
    return await this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<string> {
    return await this.ordersService.remove(id);
  }
}
