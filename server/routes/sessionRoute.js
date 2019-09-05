import express from 'express';
import Mentorship from '../controllers/sessionController';
import TokenValidator from '../middlewares/TokenValidator';




const router = express.Router();

router.post('/sessions', TokenValidator, Mentorship.BookSession)


export default router;