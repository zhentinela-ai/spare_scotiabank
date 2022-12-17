import { createModel, getModel, getModels } from "../controllers/model.controller";
import router from "./index";

router.route("/")
  .get(getModels)
  .post(createModel);

router.route("/:id")
  .get(getModel);

export default router;
