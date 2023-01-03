import { stringType } from "../config";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Output } from "./Output";

@Entity()
export class OperationAssigned extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column(stringType, { nullable: false })
  operation!: string;

  @OneToMany(() => Output, (output) => output.operation_assigned_id)
  outputs!: Output[];
}
