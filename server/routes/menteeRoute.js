import express from 'express';
import menteeController from '../controllers/menteeController';
import viewSpecificMentor from '../controllers/menteeController';





const router = express.Router();

router.get('/mentors', menteeController.viewMentors)
router.get('/mentors/:mentor_id', menteeController.viewSpecificMentor)

export default router;