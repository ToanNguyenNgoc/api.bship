import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BshipService } from './bship.service';
import { CreateBshipDto } from './dto/create-bship.dto';
import { UpdateBshipDto } from './dto/update-bship.dto';
import { ApiTags } from '@nestjs/swagger';
import { API_TAG } from 'src/swagger/inddex';

@ApiTags(API_TAG.BSHIP)
@Controller('api/user')
export class BshipController {
  constructor(private readonly bshipService: BshipService) {}

  @Post(':route')
  create(
    @Param('route') route: string,
    @Body() createBshipDto: CreateBshipDto,
  ) {
    return this.bshipService.create(route, createBshipDto);
  }

  // @Get()
  // findAll() {
  //   return this.bshipService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.bshipService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBshipDto: UpdateBshipDto) {
  //   return this.bshipService.update(+id, updateBshipDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.bshipService.remove(+id);
  // }
}
