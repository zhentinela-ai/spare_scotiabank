import { stringType } from "../config";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Lot } from "./Lot";

@Entity()
export class Scotia extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column(stringType, { length: 45, nullable: false })
  operation!: string;

  @OneToMany(() => Lot, (lot) => lot.scotia)
  lots!: Lot[];
}
