import { createOutput } from '../controllers/output.controller';
import { Router } from 'express';

const router = Router();

router.route("/")
  .post(createOutput)

export default router;
