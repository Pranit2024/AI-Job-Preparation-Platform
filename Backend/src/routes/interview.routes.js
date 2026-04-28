const express=require("express")
const authMiddleware=require("../middlewares/auth.middleware")
const interviewController=require("../controllers/interview.controller")
const upload=require("../middlewares/file.middleware")

const interviewRouter=express.Router()

// generate new interview report on the basis of user self desc,resume and jd
interviewRouter.post("/",authMiddleware.authUser,upload.single("resume"),interviewController.generateInterViewReportController)


//get interview report by interview id
interviewRouter.get("/report/:interviewId", authMiddleware.authUser, interviewController.getInterviewReportByIdController)


//get all inteview reports of logged in user
interviewRouter.get("/", authMiddleware.authUser, interviewController.getAllInterviewReportsController)


//generate resume pdf on the basis of user self description, resume content and job description.
interviewRouter.post("/resume/pdf/:interviewReportId", authMiddleware.authUser, interviewController.generateResumePdfController)


module.exports=interviewRouter