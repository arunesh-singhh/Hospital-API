import express from 'express';
import passport from 'passport';
import { filteredReports } from '../controllers/status.js';

const router = express.Router();

import doctorsRouter from './doctors.js';
import patientsRouter from './patients.js';

router.use('/api/doctors', doctorsRouter);
router.use('/api/patients', patientsRouter);
router.get('/api/reports/:status', passport.authenticate('jwt', { session: false }), filteredReports);

export default router;