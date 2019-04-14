import * as mongoose from 'mongoose';

const LightControl = mongoose.Schema;

export const LightControlSchema = new LightControl({
    amount: {
        type: Number,
        required: 'Enter a amount'
    },
    unitPrice: {
        type: Number,
        required: 'Enter a unit price'
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});