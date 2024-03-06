import { PartialType } from '@nestjs/mapped-types';
import { CreateCutiDto } from './create-cuti.dto';

export class UpdateCutiDto extends PartialType(CreateCutiDto) {

  // update DTO cuti
  id: string;
  nik : number;
  user_created : string;
  tanggal_mulai : Date;
  tanggal_selesai : Date;
  approval : number | null;
  approval_date : Date;
  keperluan : string;
  tipe : string;
  pengganti : string;
}

export default UpdateCutiDto;
