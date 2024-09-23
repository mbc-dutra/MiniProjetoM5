import { Router } from "express";
import { createJobs, deleteJob, getAllJobs, getJobById, updateJob } from "../controller/Job.Controller.js";

const JobRouter = Router();

JobRouter.post("/jobs", (req, res) => {
    const jobs = req.body;

    if (!Array.isArray(jobs)) {
        return res.status(400).json({ message: 'Expected an array of jobs' });
    }

    const newJobs = jobs.map(job => {
        const { jobTitle, sendData, limitDate, wage, location, requirements, description, category } = job;
        return createJobs(jobTitle, sendData, limitDate, wage, location, requirements, description, category);
    });

    res.status(201).json({ newJobs });
});

JobRouter.patch("/jobs", (req, res) => {
    const { id, jobTitle, limitDate, category } = req.body;
    const updatedJob = updateJob(id, jobTitle, limitDate, category);
    if (!updatedJob) {
        return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ updatedJob });
});

JobRouter.get("/jobs", (req, res) => {
    const { location, category } = req.query;
    let jobList = getAllJobs();

    if (location) {
        jobList = jobList.filter(job => job.location === location);
    }

    if (category) {
        jobList = jobList.filter(job => job.category === category);
    }

    res.status(200).json({ jobList });
});

JobRouter.get("/jobs/:id", (req, res) => {
    const { id } = req.params;
    const job = getJobById(id);
    if (!job) {
        return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ job });
});

JobRouter.delete("/jobs/:id", (req, res) => {
    const { id } = req.params;
    const deletedJob = deleteJob(id);
    if (!deletedJob) {
        return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ deletedJob });
});

export { JobRouter };
