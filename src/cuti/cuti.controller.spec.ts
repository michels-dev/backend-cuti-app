import { Test, TestingModule } from '@nestjs/testing';
import { CutiController } from './cuti.controller';
import { CutiService } from './cuti.service';

describe('CutiController', () => {
  let controller: CutiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CutiController],
      providers: [CutiService],
    }).compile();

    controller = module.get<CutiController>(CutiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
