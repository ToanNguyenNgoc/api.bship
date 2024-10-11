import { ApiProperty } from '@nestjs/swagger';

export class CreateBshipDto {
  @ApiProperty()
  goID: number;

  @ApiProperty()
  accessToken: string;
}
