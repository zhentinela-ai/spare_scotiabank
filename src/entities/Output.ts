import { numberType, stringType } from "../config";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Inventory } from "./Inventory";
import { OperationAssigned } from "./operationAssigned";

@Entity()
export class Output extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column(stringType, { length: 45, nullable: false, unique: true })
  serial!: string;

  @Column({
    default: () => "CURRENT_TIMESTAMP",
    name: "create_time",
    nullable: false,
  })
  create_time?: Date;

  // @Column(stringType, { length: 100, nullable: false })
  // assigned!: string;

  @Column(numberType, { name: "operation_assigned_id", nullable: false })
  operation_assigned_id!: number;

  @ManyToOne(() => OperationAssigned)
  @JoinColumn({
    name: "operation_assigned_id",
    referencedColumnName: "id",
    foreignKeyConstraintName: "operation_assigned_outputs",
  })
  operation_assigned!: OperationAssigned;

  @Column(stringType, { length: 8, nullable: false })
  scotia_id!: string;

  @OneToMany(() => Inventory, (inventory) => inventory.output)
  inventory!: Inventory[];
}
