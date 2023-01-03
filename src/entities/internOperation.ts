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
export class InternOperation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column(stringType, { nullable: false })
  operation!: string;

  @OneToMany(() => Lot, (lot) => lot.internOperation)
  lots!: Lot[];
}
