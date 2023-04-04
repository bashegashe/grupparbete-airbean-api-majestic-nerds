import { Router } from 'express';
import {
  HistoryController, LoginController, RegisterController, StatusController,
} from '../controllers/user/userController.js';

const router = Router();

router.post('/signup', RegisterController.register);
router.post('/login', LoginController.login);
router.get('/history', HistoryController.getHistory);
router.get('/status', StatusController.getStatus);

export default router;
