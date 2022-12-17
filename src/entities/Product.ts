import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Model } from "./Model";

@Entity({ name: "products" })
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  product!: string;

  @OneToMany(() => Model, (model) => model.product)
  models!: Model[];
}
