import { PartialType } from '@nestjs/swagger';
import { CreateBshipDto } from './create-bship.dto';

export class UpdateBshipDto extends PartialType(CreateBshipDto) {}
