import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    registerationNumber: Number,
    name: String,
    grade: String,
    Section: {
        type: String,
        default: 'A'
    },
    subjects: [String]
});

const student = mongoose.model('students', studentSchema);

export default student;