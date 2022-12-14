import { stringType } from "../config";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Model } from "./Model";

@Entity()
export class Brand extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column(stringType, { length: 45, nullable: false })
  brand!: string;

  @OneToMany(() => Model, (model) => model.brand)
  models!: Model[];
}
