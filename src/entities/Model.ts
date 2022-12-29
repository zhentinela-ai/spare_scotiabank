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

  // @Column(numberType, { nullable: false })
  // productId!: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "product_id", referencedColumnName: "id" })
  product!: Product;

  // @Column(numberType, { nullable: false })
  // brandId!: number;

  @ManyToOne(() => Brand)
  @JoinColumn({ name: "brand_id", referencedColumnName: "id" })
  brand!: Brand;

  @OneToMany(() => Lot, (lot) => lot.models)
  lot!: Lot;
}
