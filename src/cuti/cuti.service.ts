import { Injectable } from '@nestjs/common';
import { CreateCutiDto } from './dto/create-cuti.dto';
import { UpdateCutiDto } from './dto/update-cuti.dto';

@Injectable()
export class CutiService {
  create(createCutiDto: CreateCutiDto) {
    return 'This action adds a new cuti';
  }

  findAll() {
    return `This action returns all cuti`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cuti`;
  }

  update(id: number, updateCutiDto: UpdateCutiDto) {
    return `This action updates a #${id} cuti`;
  }

  remove(id: number) {
    return `This action removes a #${id} cuti`;
  }
}
