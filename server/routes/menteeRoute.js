import express from 'express';
import menteeController from '../controllers/menteeController';






const router = express.Router();

router.get('/mentors', menteeController.viewmentors)

export default router;