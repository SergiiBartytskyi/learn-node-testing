import { Router } from 'express';
import studentRouter from './students.js';
import authRouter from './auth.js';

const router = Router();

router.use('/students', studentRouter);
router.use('/auth', authRouter);

export default router;
