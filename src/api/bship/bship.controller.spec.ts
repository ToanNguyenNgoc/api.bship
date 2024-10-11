import { Test, TestingModule } from '@nestjs/testing';
import { BshipController } from './bship.controller';
import { BshipService } from './bship.service';

describe('BshipController', () => {
  let controller: BshipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BshipController],
      providers: [BshipService],
    }).compile();

    controller = module.get<BshipController>(BshipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
