import { Injectable } from '@nestjs/common';
import { CreateBshipDto } from './dto/create-bship.dto';
import { UpdateBshipDto } from './dto/update-bship.dto';
import axios, { AxiosError } from 'axios';
import { CONST } from 'src/utils';
import { Request } from 'express';

@Injectable()
export class BshipService {
  async create(
    reqHeader: Request,
    route: string,
    createBshipDto: CreateBshipDto,
  ) {
    try {
      const response = await axios.post(
        `${process.env.BSHIP_SOCKET_API_URL}/api/user/${route}`,
        createBshipDto,
        {
          headers: {
            'Content-Type': 'application/json',
            accept_token:
              createBshipDto.accessToken || reqHeader.headers['accept_token'],
          },
        },
      );
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return {
        data: {
          message: 'Error',
        },
      };
    }
  }

  async findAll(reqHeader: Request, route: string) {
    try {
      const response = await axios.get(
        `${process.env.BSHIP_SOCKET_API_URL}/api/user/${route}`,
        {
          headers: {
            'Content-Type': 'application/json',
            accept_token: reqHeader.headers['accept_token'],
          },
        },
      );
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return {
        data: {
          message: 'Error',
        },
      };
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} bship`;
  }

  update(id: number, updateBshipDto: UpdateBshipDto) {
    return `This action updates a #${id} bship`;
  }

  remove(id: number) {
    return `This action removes a #${id} bship`;
  }
}
