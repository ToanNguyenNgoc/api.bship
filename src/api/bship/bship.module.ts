import { Module } from '@nestjs/common';
import { BshipService } from './bship.service';
import { BshipController } from './bship.controller';

@Module({
  controllers: [BshipController],
  providers: [BshipService],
})
export class BshipModule {}
