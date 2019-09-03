import express from 'express';
import menteeController from '../controllers/menteeController';
import viewspecificmentor from '../controllers/menteeController';





const router = express.Router();

router.get('/mentors', menteeController.viewmentors)
router.get('/mentors/:mentor_id', menteeController.viewspecificmentor)

export default router;