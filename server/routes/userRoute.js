import express from 'express';
import userController from '../controllers/userControllers';

const router = express.Router();

router.post('/auth/user/signup', userController.SignUp);
router.post('/auth/user/signin', userController.SignIn);
export default router;