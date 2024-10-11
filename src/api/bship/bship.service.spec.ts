import { Test, TestingModule } from '@nestjs/testing';
import { BshipService } from './bship.service';

describe('BshipService', () => {
  let service: BshipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BshipService],
    }).compile();

    service = module.get<BshipService>(BshipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
