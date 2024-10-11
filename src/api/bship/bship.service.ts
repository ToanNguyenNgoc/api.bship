import { Injectable } from '@nestjs/common';
import { CreateBshipDto } from './dto/create-bship.dto';
import { UpdateBshipDto } from './dto/update-bship.dto';
import axios, { AxiosError } from 'axios';
import { CONST } from 'src/utils';

@Injectable()
export class BshipService {
  async create(route: string, createBshipDto: CreateBshipDto) {
    try {
      const response = await axios.post(
        `${process.env.BSHIP_SOCKET_API_URL}/api/user/${route}`,
        createBshipDto,
        {
          headers: {
            'Content-Type': 'application/json',
            accept_token: createBshipDto.accessToken,
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

  findAll() {
    return `This action returns all bship`;
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
