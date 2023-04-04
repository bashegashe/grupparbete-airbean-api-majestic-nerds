import { Router } from 'express';
import { GetOrderController, MakeOrderController, MenuController } from '../controllers/beans/beansController.js';

const router = Router();

router.get('/', MenuController.getMenu);
router.post('/order', MakeOrderController.makeOrder);
router.get('/order/status/:orderId', GetOrderController.getOrder);

export default router;
