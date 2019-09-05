import express from 'express';
import menteeController from '../controllers/menteeController';
import ViewSpecificMentor from '../controllers/menteeController';





const router = express.Router();

router.get('/mentors', menteeController.ViewMentors)
router.get('/mentors/:mentor_id', menteeController.ViewSpecificMentor)

export default router;