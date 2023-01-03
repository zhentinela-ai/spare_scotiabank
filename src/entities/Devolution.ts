import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { stringType } from "../config";
import { Scotia } from "./Scotia";
import { InternOperation } from "./internOperation";

@Entity()
export class Devolution extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => InternOperation)
  @JoinColumn({
    name: "internOperation_id",
    referencedColumnName: "id",
    foreignKeyConstraintName: "internOperation_devolution",
  })
  internOperation!: InternOperation;

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

  @Column({ type: "text", nullable: false })
  description!: string;
}
