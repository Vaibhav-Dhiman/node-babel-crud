import mongoose from 'mongoose';

const schema = mongoose.Schema;

export const contactSchema = new schema({
    firstName : {
        type: String,
        require: 'Enter the firstName'
    },
    lastName : {
        type: String,
        require: 'Enter the lastName'
    },
    company : {
        type: String,
        require: 'Enter the firstName'
    },
    email : {
        type: String
        },
    phone : {
        type: Number
    },
    created_Date: {
        type: Date,
        default: Date.now
    }
});