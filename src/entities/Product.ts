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
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column(stringType, { length: 45, nullable: false })
  product!: string;

  @OneToMany(() => Model, (model) => model.product)
  models!: Model[];
}
