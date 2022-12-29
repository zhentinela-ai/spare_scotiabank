import { numberType, stringType } from "../config";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Model } from "./Model";
import { Operation } from "./Operation";
import { Inventory } from "./Inventory";

@Entity()
export class Lot extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column(stringType, { length: 45, nullable: false })
  lot!: string;

  @Column(numberType, { name: "model_id", nullable: false })
  modelId!: number;

  @OneToMany(() => Model, (model) => model.lot)
  models!: Model[];

  @Column(numberType, { nullable: false })
  stock!: number;

  @Column(numberType, { name: "operation_id", nullable: false })
  operationId!: number;

  @ManyToOne(() => Operation, (operation) => operation.lots)
  operation!: Operation;

  @Column(stringType, { length: 45, nullable: false })
  serial!: string;

  @CreateDateColumn({
    name: "create_time",
    nullable: false,
  })
  crate_time!: Date;

  @ManyToOne(() => Inventory, (inventory) => inventory.lots)
  inventory!: Inventory;
}
