import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cuti {
  // create Entity cuti
  @PrimaryGeneratedColumn("uuid")
  id : string;

  @Column()
  tanggal_mulai : Date;

  @Column()
  tanggal_selesai : Date;

  @Column({ nullable : true })
  approval : number;

  @Column()
  approval_date : Date;

  @Column()
  keperluan : string;

  @Column()
  tipe : string;

  @Column()
  pengganti : string;
}
