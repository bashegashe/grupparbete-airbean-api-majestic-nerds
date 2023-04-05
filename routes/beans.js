import { Router } from 'express';
import { GetOrderController, MakeOrderController, MenuController } from '../controllers/beans/beansController.js';
import { checkOrder } from '../middleware/orderValidation.js';

const router = Router();

router.get('/', MenuController.getMenu);
router.post('/order', checkOrder, MakeOrderController.makeOrder);
router.get('/order/status/:orderId', GetOrderController.getOrder);

export default router;
