import express from 'express'
import mentorcrl from '../controller/mentor.js'

const router = express.Router()

router.post('/create',mentorcrl.createMentor)
router.post('/assignStudentsToMentor',mentorcrl.assignStudentsToMentors)
router.get('/studentsForParticularMentor/:mentorid',mentorcrl.getAllStudentsByMentor)

export default router