import { stringType } from "../config";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Lot } from "./Lot";

@Entity()
export class Operation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column(stringType, { length: 45, nullable: false })
  operation!: string;

  @ManyToOne(() => Lot, (lot) => lot.operation)
  lots!: Lot[];
}
