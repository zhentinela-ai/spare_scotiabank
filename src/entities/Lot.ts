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
import { Operation } from "./Operation";
import { Inventory } from "./Inventory";

@Entity()
export class Lot extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column(stringType, { length: 45, nullable: false })
  lot!: string;

  @Column(numberType, { name: "model_id", nullable: false })
  model_id!: number;

  @ManyToOne(() => Model)
  @JoinColumn({ name: "model_id", referencedColumnName: "id" })
  model!: Model;

  @Column(numberType, { nullable: false })
  stock!: number;

  @Column(numberType, { name: "operation_id", nullable: false })
  operation_id!: number;

  @ManyToOne(() => Operation)
  @JoinColumn({ name: "operation_id", referencedColumnName: "id" })
  operation!: Operation;

  @Column(stringType, { length: 45, nullable: false })
  serial!: string;

  @CreateDateColumn({
    name: "create_time",
  })
  create_time?: Date;

  @OneToMany(() => Inventory, (inventory) => inventory.lots)
  inventory!: Inventory[];
}
