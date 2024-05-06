import mongoose from 'mongoose';

const { Schema } = mongoose;

const doctorSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    reports: [{
        type: Schema.Types.ObjectId,
        ref: 'Reports',
    }]
}, {
    timestamps: true
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;