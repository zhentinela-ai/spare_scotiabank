import { Model } from "./entities/Model";
import { AppDataSource } from "./db";
import { Brand } from "./entities/Brand";
import { Product } from "./entities/Product";
import { Request, Response } from "express";

export const initialValues = async (req?: Request, res?: Response) => {
  const models = await Model.find();
  if (models.length === 0) {
    const Brands = [
      { brand: "LENOVO" },
      { brand: "DELL" },
      { brand: "Jabra" },
      { brand: "Gemalto" },
      { brand: "Plantronics" },
    ];
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Brand)
      .values(Brands)
      .execute();

    const Products = [
      { product: "Laptop" },
      { product: "Desktop" },
      { product: "Monitor" },
      { product: "Token" },
      { product: "Diadema" },
    ];
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(Products)
      .execute();

    const Models = [
      { model: "T470s", productId: 1, brandId: 1 },
      { model: "T480s", productId: 1, brandId: 1 },
      { model: "T490s", productId: 1, brandId: 1 },
      { model: "T495s", productId: 1, brandId: 1 },
      { model: "T14", productId: 1, brandId: 1 },
      { model: "M700q", productId: 2, brandId: 1 },
      { model: "2450", productId: 1, brandId: 2 },
      { model: "Jabra", productId: 5, brandId: 3 },
      { model: "GETL", productId: 4, brandId: 4 },
      { model: "Plantronics", productId: 5, brandId: 5 },
    ];

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Model)
      .values(Models)
      .execute();
  }
};
