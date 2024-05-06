import passport from 'passport';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
import Doctor from '../models/doctor.js';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'Alert1234'
};

passport.use(new JWTStrategy(opts, async(jwtPayload, done) => {
    try {
        const user = await Doctor.findById(jwtPayload._id);
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    } catch (error) {
        console.log('Error in finding the User from JWT:', error);
        return done(error);
    }
}));

export default passport;