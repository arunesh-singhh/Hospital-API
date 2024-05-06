import mongoose from 'mongoose';

const { Schema } = mongoose;

const reportSchema = new Schema({
    createdByDoctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
    },
    status: {
        type: String,
        required: true,
        enum: [
            'Negative',
            'Travelled-Quarantine',
            'Symptoms-Quarantine',
            'Positive-Admit'
        ]
    },
    date: {
        type: Date,
        required: true,
    }
}, {
    timestamps: true
});

const Reports = mongoose.model('Reports', reportSchema);

export default Reports;