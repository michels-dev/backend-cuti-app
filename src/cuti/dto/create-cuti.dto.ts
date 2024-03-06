export class CreateCutiDto {

  // create DTO cuti
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

export default CreateCutiDto

