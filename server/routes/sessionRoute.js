import express from 'express';
import Mentorship from '../controllers/sessionController';
import tokenValidator from '../middlewares/tokenValidator';




const router = express.Router();

router.post('/sessions', tokenValidator, Mentorship.bookSession)
router.patch('/sessions/:sessionId/accept', tokenValidator, Mentorship.acceptSession)
router.patch('/sessions/:sessionId/reject', tokenValidator, Mentorship.rejectSession)

export default router;