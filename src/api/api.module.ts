import { Module } from '@nestjs/common';
import { BshipModule } from './bship/bship.module';

@Module({
  imports: [BshipModule]
})
export class ApiModule {}
