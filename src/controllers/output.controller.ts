import { Output } from "../entities/Output";
import { Request, Response } from "express";

export const createOutput = async (req: Request, res: Response) => {
  try {
    const newOutput: Output = req.body;
    await Output.insert(newOutput);

    return res.status(201).json({
      message: "Output created successfully",
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
