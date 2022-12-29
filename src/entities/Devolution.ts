import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Operation } from "./Operation";
import { stringType } from "../config";

@Entity()
export class Devolution extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Operation)
  @JoinColumn({ name: "operation_id", referencedColumnName: "id" })
  operation!: Operation;

  @Column(stringType, { length: 45, nullable: false })
  serial!: string;

  @Column(stringType, { length: 45, nullable: false })
  name!: string;

  @Column(stringType, { length: 8, nullable: false })
  scotia_id!: string;

  @CreateDateColumn({
    name: "create_time",
    nullable: false,
  })
  create_time!: Date;

  @Column(stringType, { nullable: false })
  description!: string;
}
