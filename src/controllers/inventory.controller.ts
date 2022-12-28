import { Inventory } from "../entities/Inventory";
import { Request, Response } from "express";

export const getInvetory = async (req: Request, res: Response) => {
  try {
    const inventory = await Inventory.find({
      relations: ["lots", "outputs"],
    });
    return res.json(inventory);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
