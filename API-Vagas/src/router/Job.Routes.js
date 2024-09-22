import { Router } from "express";
import { createJobs, deleteJob, getAllJobs, getJobById, getJobsByLocation, updateJob } from "../controller/Job.Controller.js";

const JobRouter = Router();

// Atualização para lidar com múltiplos jobs
JobRouter.post("/jobs", (req, res) => {
    const jobs = req.body;

    // Verificar se recebemos um array
    if (!Array.isArray(jobs)) {
        return res.status(400).json({ message: 'Expected an array of jobs' });
    }

    // Processar cada job no array
    const newJobs = jobs.map(job => {
        const { jobTitle, sendData, limitDate, wage, location, requirements, description } = job;
        return createJobs(jobTitle, sendData, limitDate, wage, location, requirements, description);
    });

    // Retornar os jobs adicionados
    res.status(200).json({ newJobs });
});

JobRouter.patch("/jobs", (req, res) => {
    const { id, jobTitle, limitDate } = req.body;
    const updatedJob = updateJob(id, jobTitle, limitDate);
    res.status(200).json({ updatedJob });
});

JobRouter.get("/jobs", (req, res) => {
    const jobList = getAllJobs();
    res.status(200).json({ jobList });
});

JobRouter.get("/jobs/:id", (req, res) => {
    const { id } = req.params;
    const job = getJobById(id);
    res.status(200).json({ job });
});

JobRouter.get("/jobs/location/:location", (req, res) => {
    const { location } = req.params;
    const jobs = getJobsByLocation(location);
    res.status(200).json({ jobs });
});

JobRouter.delete("/jobs/:id", (req, res) => {
    const { id } = req.params;
    const deletedJob = deleteJob(id);
    res.status(200).json({ deletedJob });
});

export { JobRouter };
