import { Model } from "./entities/Model";
import { AppDataSource } from "./db";
import { Brand } from "./entities/Brand";
import { Product } from "./entities/Product";
import { Request, Response } from "express";
import { Scotia } from "./entities/Scotia";
import { InternOperation } from "./entities/internOperation";
import { OperationAssigned } from "./entities/operationAssigned";

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
      { model: "T470s", product_id: 1, brand_id: 1 },
      { model: "T480s", product_id: 1, brand_id: 1 },
      { model: "T490s", product_id: 1, brand_id: 1 },
      { model: "T495s", product_id: 1, brand_id: 1 },
      { model: "T14", product_id: 1, brand_id: 1 },
      { model: "M700q", product_id: 2, brand_id: 1 },
      { model: "2450", product_id: 1, brand_id: 2 },
      { model: "Jabra", product_id: 5, brand_id: 3 },
      { model: "GETL", product_id: 4, brand_id: 4 },
      { model: "Plantronics", product_id: 5, brand_id: 5 },
    ];

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Model)
      .values(Models)
      .execute();
  }

  const operations = await Scotia.find();
  if (operations.length === 0) {
    const Operations = [{ operation: "GBS" }, { operation: "GSG" }];

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Scotia)
      .values(Operations)
      .execute();
  }

  const internOperations = await InternOperation.find();
  if (internOperations.length === 0) {
    const InternOperations = [
      { operation: "No Assigned" },
      { operation: "It Delivery" },
      { operation: "It Support" },
    ];

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(InternOperation)
      .values(InternOperations)
      .execute();
  }

  const operationAssigneds = await OperationAssigned.find();
  if (operationAssigneds.length === 0) {
    const OperationAssigneds = [
      { operation: "Sin Imagen" },
      { operation: "ScotiaTech" },
      { operation: "Administrativo" },
      { operation: "Finance" },
      { operation: "HR" },
      { operation: "AP Mexico Finance" },
      { operation: "Fraud" },
      { operation: "Canada CC" },
      { operation: "Costa Rica CC" },
      { operation: "Peru CC" },
      { operation: "Mexico CC" },
      { operation: "Colpatria CC" },
      { operation: "Costa Rica Coll" },
      { operation: "Caribe Coll" },
      { operation: "Canada Coll" },
      { operation: "AML" },
      { operation: "Chile CC" },
      { operation: "CyberLab" },
    ];

    await AppDataSource.createQueryBuilder()
      .insert()
      .into(OperationAssigned)
      .values(OperationAssigneds)
      .execute();
  }
};
