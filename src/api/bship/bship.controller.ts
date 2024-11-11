import { Controller, Get, Post, Body, Param, Req } from '@nestjs/common';
import { BshipService } from './bship.service';
import { CreateBshipDto } from './dto/create-bship.dto';
import { ApiTags } from '@nestjs/swagger';
import { API_TAG } from 'src/swagger/inddex';
import { Request } from 'express';

@ApiTags(API_TAG.BSHIP)
@Controller('api/user')
export class BshipController {
  constructor(private readonly bshipService: BshipService) {}

  @Post(':route')
  create(
    @Req() req: Request,
    @Param('route') route: string,
    @Body() createBshipDto: CreateBshipDto,
  ) {
    return this.bshipService.create(req, route, null, createBshipDto);
  }

  @Post(':route/:route_second')
  createSecond(
    @Req() req: Request,
    @Param('route') route: string,
    @Param('route_second') route_second: string,
    @Body() createBshipDto: CreateBshipDto,
  ) {
    return this.bshipService.create(req, route, route_second, createBshipDto);
  }

  @Get(':route')
  findAll(@Req() req: Request, @Param('route') route: string) {
    return this.bshipService.findAll(req, route);
  }

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
