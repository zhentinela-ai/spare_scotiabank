import { stringType } from "../config";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Inventory } from "./Inventory";

@Entity()
export class Output extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column(stringType, { length: 45, nullable: false })
  serial!: string;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  create_time!: Date;

  @Column(stringType, { length: 100, nullable: false })
  assigned!: string;

  @Column(stringType, { length: 8, nullable: false })
  scotia_id!: string;

  @ManyToOne(() => Inventory, (inventory) => inventory.outputs)
  inventory!: Inventory;
}
