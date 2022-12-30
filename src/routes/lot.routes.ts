import { createLot, getLot, getLots } from '../controllers/lot.controller';
import { Router } from 'express';

const router = Router()

router.route("/")
  .get(getLots)
  .post(createLot)

router.route("/:id")
  .get(getLot)

export default router;
