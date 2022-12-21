import { Lot } from "../entities/Lot";
import { Request, Response } from "express";

export const getLots = async (req: Request, res: Response) => {
  try {
    const lost = await Lot.find({
      relations: ["operation"],
    });
    return res.json(lost);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
