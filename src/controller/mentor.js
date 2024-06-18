
import mentorModel from "../modules/mentor.js";
import studentModel from "../modules/student.js";



let createMentor = async (req,res)=>{

    try {
    

       let mentor = await mentorModel.findOne({mentorName:req.body.mentorName})
       if(mentor)
       {
        res.status(400).send({
            message:`Mentor ${req.body.mentorName} already exist`
        })
       }
       else{
        let mentorName = req.body
        await mentorModel.create(mentorName)
        res.status(201).send({
            message:`Mentor ${req.body.mentorName} created successfully`
            
        })
       }

       
    
    
    } catch (error) {
        res.status(500).send({
            message:"Internal server Error",
            error:error.message
        })
    
}
}

const assignStudentsToMentors = async (req, res) => {
    try {
        const { mentorId, _id: studentId } = req.body;

        const student = await studentModel.findOne({ _id: studentId });

        if (!student) {
            return res.status(400).send({
                message: "Student not found"
            });
        } else if (student.currentMentor) {
            return res.status(400).send({
                message: "Mentor already assigned to the student"
            });
        }

        const mentor = await mentorModel.findOne({ _id: mentorId });

        if (!mentor) {
            return res.status(400).send({
                message: "Mentor not found"
            });
        }

        await studentModel.updateOne(
            { _id: studentId },
            { 
                $set: { 
                    currentMentor: mentorId,
                    mentorName: mentor.mentorName // Assigning mentor's name to the student
                } 
            }
        );

        const updatedStudent = await studentModel.findOne({ _id: studentId });

        if (!updatedStudent) {
            return res.status(400).send({
                message: "Student not found after assignment"
            });
        }

        return res.status(201).send({
            message: "Assigned student to mentor successfully",
            updatedStudent
        });

    } catch (error) {
        return res.status(500).send({
            message: "Internal server Error",
            error: error.message
        });
    }
};
const getAllStudentsByMentor = async (req, res) => {
    try {
        const { mentorid: mentorId } = req.params;

        if (!mentorId) {
            return res.status(400).send({
                message: "Invalid or missing mentorId"
            });
        }

        const students = await studentModel.find({ currentMentor: mentorId });

        if (students.length > 0) {
            return res.status(200).send({
                message: "Students fetched successfully",
                students
            });
        } else {
            return res.status(400).send({
                message: "No students assigned to this mentor"
            });
        }
    } catch (error) {
        return res.status(500).send({
            message: "Internal server Error",
            error: error.message
        });
    }
};

export default {
    createMentor,
    assignStudentsToMentors,
    getAllStudentsByMentor
};
