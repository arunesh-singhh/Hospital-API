import mongoose from 'mongoose';

const { Schema } = mongoose;

const patientSchema = new Schema({
    number: {
        type: String,
        required: true
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

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;