import { Router } from 'express';
import { HistoryController, LoginController, RegisterController } from '../controllers/user/userController.js';
import { checkRegistration, checkLogin, isAuthenticated } from '../middleware/userValidation.js';

const router = Router();

router.post('/signup', checkRegistration, RegisterController.register);
router.post('/login', checkLogin, LoginController.login);
router.post('/history', isAuthenticated, HistoryController.getHistory);

export default router;
