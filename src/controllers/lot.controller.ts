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

export const getLot = async (req: Request, res: Response) => {
  try {
    const { lot } = req.params;
    const findLot = await Lot.findOne({
      where: {
        lot,
      },
      relations: ["operation"],
    });

    if (!findLot) return res.status(404).json({ message: "Lot not found" });

    return res.json(findLot);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
