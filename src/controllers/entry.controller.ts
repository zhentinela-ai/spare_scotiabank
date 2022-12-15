import { Request, Response } from "express";
import { connect } from "../database";

export const getEntrys = async (req: Request, res: Response) => {
  const conn = await connect();
  const entrys = await conn.query("SELECT * FROM entry");
  return res.json(entrys[0]);
};
