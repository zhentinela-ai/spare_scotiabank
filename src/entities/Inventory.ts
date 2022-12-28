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

  @Column(numberType, { name: "lot_id" })
  lotId!: number;

  @OneToMany(() => Lot, (lot) => lot.inventory)
  lots!: Lot[];

  @Column(numberType, { name: "output_id" })
  outputId!: number;

  @OneToMany(() => Output, (output) => output.inventory)
  outputs!: Output[];
}
