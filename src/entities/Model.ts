import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Brand } from "./Brand";
import { Product } from "./Product";

@Entity({ name: "models" })
export class Model extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  model!: string;

  @Column()
  productId!: number;

  @ManyToOne(() => Product, (product) => product)
  product!: Product;

  @Column()
  brandId!: number;

  @ManyToOne(() => Brand, (brand) => brand.models)
  brand!: Brand;
}
