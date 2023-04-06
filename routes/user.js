import { Router } from 'express';
import {
  HistoryController, LoginController, RegisterController,
} from '../controllers/user/userController.js';
import { checkUsername, checkLogin, checkUserId } from '../middleware/userValidation.js';

const router = Router();

router.post('/signup', checkUsername, RegisterController.register);
router.post('/login', checkLogin, LoginController.login);
router.post('/history', checkUserId, HistoryController.getHistory);

export default router;
