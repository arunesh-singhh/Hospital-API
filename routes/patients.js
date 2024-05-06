import express from 'express';
import passport from 'passport';
import * as patientController from '../controllers/patientController.js';

const router = express.Router();

router.post('/register', passport.authenticate('jwt', { session: false }), patientController.register);
router.post('/:id/create_report', passport.authenticate('jwt', { session: false }), patientController.createReport);
router.get('/:id/all_reports', passport.authenticate('jwt', { session: false }), patientController.patientReports);

export default router;