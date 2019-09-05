import express from 'express';
import userController from '../controllers/userControllers';
import adminController from '../controllers/adminController';
import TokenValidator from '../middlewares/TokenValidator';



const router = express.Router();

router.post('/auth/user/signup', userController.SignUp);
router.post('/auth/user/signin', userController.SignIn);
router.patch('/user/:userId', TokenValidator, adminController.changetomentor);

export default router;