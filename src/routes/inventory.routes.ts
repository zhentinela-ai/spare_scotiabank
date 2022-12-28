import { getInvetory } from "../controllers/inventory.controller";
import { Router } from "express";

const router = Router();

router.route("/")
  .get(getInvetory)

router.route("/:id")
  .get()
  
export default router;