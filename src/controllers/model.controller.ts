import { Model } from "../entities/Model";
import { Request, Response } from "express";
import { Brand } from "../entities/Brand";

export async function getModels(req: Request, res: Response) {
  try {
    const models = await Model.find({
      relations: ["product", "brand"],
    });

    return res.json(models);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export async function getModel(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const model = await Model.findOne({
      where: {
        id: Number(id),
      },
      relations: ["product", "brand"],
    });

    if (!model) return res.status(404).json({ message: "Model not found" });

    return res.json(model);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

export async function createModel(req: Request, res: Response) {
  try {
    const { model, productId, brandId } = req.body;

    const model_obj = Model.create({
      model,
      // productId,
      // brandId
    });
    // model_obj.model = model;
    // model_obj.productId = productId;
    // model_obj.brandId = brandId;

    await model_obj.save();

    res.json(model_obj);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}
