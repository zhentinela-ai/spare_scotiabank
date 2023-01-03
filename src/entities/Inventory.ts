import { numberType } from "../config";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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
  lot_id!: number;

  @ManyToOne(() => Lot)
  @JoinColumn({
    name: "lot_id",
    referencedColumnName: "id",
    foreignKeyConstraintName: "lot_inventory",
  })
  lot!: Lot;

  @Column(numberType, { name: "output_id" })
  output_id!: number;

  @ManyToOne(() => Output)
  @JoinColumn({
    name: "output_id",
    referencedColumnName: "id",
    foreignKeyConstraintName: "output_inventory",
  })
  output!: Output;
}
