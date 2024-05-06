import express from 'express';
import passport from 'passport';
import { filteredReports } from '../controllers/status.js';

const router = express.Router();

import doctorsRouter from './doctors.js';
import patientsRouter from './patients.js';

router.get('/', (req, res) => {
    res.send("Welcome To Hospital API (You can test other routes using postman")
});
router.use('/api/doctors', doctorsRouter);
router.use('/api/patients', patientsRouter);
router.get('/api/reports/:status', passport.authenticate('jwt', { session: false }), filteredReports);

export default router;
