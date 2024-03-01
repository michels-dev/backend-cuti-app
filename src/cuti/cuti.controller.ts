import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CutiService } from './cuti.service';
import { CreateCutiDto } from './dto/create-cuti.dto';
import { UpdateCutiDto } from './dto/update-cuti.dto';

@Controller('cuti')
export class CutiController {
  constructor(private readonly cutiService: CutiService) {}

  @Post()
  create(@Body() createCutiDto: CreateCutiDto) {
    return this.cutiService.create(createCutiDto);
  }

  @Get()
  findAll() {
    return this.cutiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cutiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCutiDto: UpdateCutiDto) {
    return this.cutiService.update(+id, updateCutiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cutiService.remove(+id);
  }
}
