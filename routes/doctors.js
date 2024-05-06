import express from 'express';
const router = express.Router();

import * as doctorController from '../controllers/doctorController.js';

router.post('/register', doctorController.create);
router.post('/login', doctorController.createSession);

export default router;