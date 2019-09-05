import express from 'express';
import Mentorship from '../controllers/sessionController';
import TokenValidator from '../middlewares/TokenValidator';




const router = express.Router();

router.post('/sessions', TokenValidator, Mentorship.BookSession)
router.patch('/sessions/:sessionId/accept', TokenValidator, Mentorship.AcceptSession)
router.patch('/sessions/:sessionId/reject', TokenValidator, Mentorship.RejectSession)

export default router;