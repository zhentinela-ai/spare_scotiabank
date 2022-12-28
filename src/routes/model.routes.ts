import { createModel, getModel, getModels } from "../controllers/model.controller";
import { Router } from "express";

const router = Router();

router.route("/")
  .get(getModels)
  .post(createModel);

router.route("/:id")
  .get(getModel);

export default router;
