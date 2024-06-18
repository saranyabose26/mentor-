import mongoose from './connect.js';

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: [true, "Student name is required"]
    },

    mentorName:{
        type:String
    },
    
    currentMentor: {
        type: mongoose.Schema.Types.ObjectId, // Assuming the mentor is referenced by ObjectId
        ref: 'mentors' // Assuming mentors are stored in a collection named 'mentors'
    },
    previousMentor: {
        type:String,
        ref: 'mentors'
    }
}, { versionKey: false });

const studentModel = mongoose.model("students", studentSchema);

export default studentModel;
