import { Router } from 'express';
import { GetOrderController, MakeOrderController, MenuController } from '../controllers/beans/beansController.js';
import { checkOrder, validateOrderNr } from '../middleware/orderValidation.js';

const router = Router();

router.get('/', MenuController.getMenu);
router.post('/order', checkOrder, MakeOrderController.makeOrder);
router.get('/order/status/', validateOrderNr, GetOrderController.getOrder);
router.get('/order/status/:orderNr', validateOrderNr, GetOrderController.getOrder);

export default router;
