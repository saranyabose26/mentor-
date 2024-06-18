import express from 'express'
import mentorRoutes from './mentor.js'
import studenRoutes from './student.js'

const router = express.Router()

router.get('/', (req,res)=>{

    res.status(200).send(`<h1> Welcome to Backend application of Students asssigning to Mentor </h>`)
})

router.use('/mentor',mentorRoutes)
router.use('/student',studenRoutes)

export default router