import { Test, TestingModule } from '@nestjs/testing';
import { ProductsImagesController } from './products_images.controller';
import { ProductsImagesService } from './products_images.service';

describe('ProductsImagesController', () => {
  let controller: ProductsImagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsImagesController],
      providers: [ProductsImagesService],
    }).compile();

    controller = module.get<ProductsImagesController>(ProductsImagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
