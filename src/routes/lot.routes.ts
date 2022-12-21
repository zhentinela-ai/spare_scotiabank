import { getLots } from '../controllers/lot.controller';
import router from './index';

router.route("/")
  .get(getLots)

export default router;
