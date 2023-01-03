import { numberType, stringType } from "../config";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Model } from "./Model";
import { Scotia } from "./Scotia";
import { Inventory } from "./Inventory";
import { InternOperation } from "./internOperation";

@Entity()
export class Lot extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column(stringType, { length: 45, nullable: true })
  lot!: string;

  @Column(numberType, { name: "model_id", nullable: false })
  model_id!: number;

  @ManyToOne(() => Model)
  @JoinColumn({
    name: "model_id",
    referencedColumnName: "id",
    foreignKeyConstraintName: "model_lot",
  })
  model!: Model;

  @Column(numberType, {
    name: "internOperation_id",
    nullable: false,
    default: 0,
  })
  internOperation_id!: number;

  @ManyToOne(() => InternOperation)
  @JoinColumn({
    name: "internOperation_id",
    referencedColumnName: "id",
    foreignKeyConstraintName: "intern_operation_lot",
  })
  internOperation!: InternOperation;

  @Column(numberType, { nullable: true, default: 1 })
  stock!: number;

  @Column(stringType, { nullable: true })
  pxe_date!: string;

  @Column(numberType, { name: "scotia_id", nullable: false })
  scotia_id!: number;

  @ManyToOne(() => Scotia)
  @JoinColumn({
    name: "scotia_id",
    referencedColumnName: "id",
    foreignKeyConstraintName: "scotia_lot",
  })
  scotia!: Scotia;

  @Column(stringType, { length: 45, nullable: false })
  serial!: string;

  @CreateDateColumn({
    name: "create_time",
  })
  create_time?: Date;

  @OneToMany(() => Inventory, (inventory) => inventory.lot)
  inventory!: Inventory[];

  @Column(numberType, { nullable: false, default: 0 })
  image!: number;
}
