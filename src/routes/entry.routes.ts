import { getEntrys } from '../controllers/entry.controller';
import router from './index';

router.route("/")
  .get(getEntrys)

export default router;
