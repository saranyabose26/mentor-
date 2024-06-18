import studentModel from "../modules/student.js";
import mentorModel from "../modules/mentor.js";
import mentor from "./mentor.js";



const createStudents = async(req,res)=>{

    try {
        const studentName = req.body
         
        if(studentName){

        const student = await studentModel.findOne({studentName:req.body.studentName})
        if(!student)
        {
          const student = await studentModel.create(req.body)
          res.status(201).send({
            message:"Student Created Successfully",
            student
          })
        }
        else{
            res.status(404).send({
                message:`student ${req.body.studentName} is Already Exist`
            })
        }
        }
        else
        {
            res.status(404).send({
                message:"StudentName is Required"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal server Error",
            error:error.message
        })
    }

}

const changeMentorforStudent = async (req, res) => {
    try {
        const { studentId, mentorId } = req.body;

        const student = await studentModel.findOne({ _id: studentId });
        if (!student) {
            return res.status(400).send({
                message: "Student not found"
            });
        }

        const mentor = await mentorModel.findOne({ _id: mentorId });
        if (!mentor) {
            return res.status(400).send({
                message: "Mentor not found"
            });
        }
        await studentModel.updateOne({_id:studentId},{$set:{previousMentor:student.mentorName}})

         await studentModel.updateOne(
            { _id: studentId },
            {
                $set: {
                    currentMentor: mentorId,
                    mentorName: mentor.mentorName 
                }
            }
        );

        const newmentor = await studentModel.findOne({_id:studentId})

        res.status(201).send({
            message: "Mentor assigned successfully for the student",
            newmentor
            
        });

    } catch (error) {
        res.status(500).send({
            message: "Internal server Error",
            error: error.message
        });
    }
};

const getPreviousMentor = async (req, res) => {
    try {
        const { studentName } = req.body;

        const student = await studentModel.findOne({ studentName });

        if (!student) {
            return res.status(400).send({
                message: "Student not found"
            });
        }

        const previousMentor = await mentorModel.findOne({ mentorName: student.previousMentor });

        if (!previousMentor) {
            return res.status(400).send({
                message: "Previous mentor not found for this student"
            });
        }

        return res.status(200).send({
            message: "Previous mentor fetched successfully",
            previousMentor
        });

    } catch (error) {
        return res.status(500).send({
            message: "Internal server Error",
            error: error.message
        });
    }
};

export default {
    createStudents,
    changeMentorforStudent,
    getPreviousMentor
};
