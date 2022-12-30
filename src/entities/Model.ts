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
import { Brand } from "./Brand";
import { Lot } from "./Lot";
import { Product } from "./Product";

@Entity()
export class Model extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column(stringType, { length: 45, nullable: false })
  model!: string;

  @Column(numberType, { name: "product_id", nullable: false })
  product_id!: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "product_id", referencedColumnName: "id" })
  product!: Product;

  @Column(numberType, { name: "brand_id", nullable: false })
  brand_id!: number;

  @ManyToOne(() => Brand)
  @JoinColumn({ name: "brand_id", referencedColumnName: "id" })
  brand!: Brand;

  @OneToMany(() => Lot, (lot) => lot.model)
  lots!: Lot[];
}
