import { numberType, stringType } from "../config";
import {
  BaseEntity,
  Column,
  Entity,
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
  productId!: number;

  @ManyToOne(() => Product, (product) => product)
  product!: Product;

  @Column(numberType, { name: "brand_id", nullable: false })
  brandId!: number;

  @ManyToOne(() => Brand, (brand) => brand.models)
  brand!: Brand;

  @OneToMany(() => Lot, (lot) => lot.models)
  lot!: Lot;
}
