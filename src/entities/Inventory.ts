import { numberType } from "../config";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Lot } from "./Lot";
import { Output } from "./Output";

@Entity()
export class Inventory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column(numberType, { nullable: false })
  lot_id!: number;

  @OneToMany(() => Lot, (lot) => lot.inventory)
  lots!: Lot;

  @Column(numberType, { nullable: false })
  output_id!: number;

  @OneToMany(() => Output, (output) => output.inventory)
  outputs!: Output;
}
