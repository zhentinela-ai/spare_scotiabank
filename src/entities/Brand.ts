import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Model } from "./Model";

@Entity({ name: "brands" })
export class Brand extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  brand!: string;

  @OneToMany(() => Model, (model) => model.brand)
  models!: Model[];
}
