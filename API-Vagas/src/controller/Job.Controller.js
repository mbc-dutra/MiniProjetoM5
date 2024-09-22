import { Job } from "../models/Job.Models.js";

let listJobs = [];
let currentId = 1;

export const createJobs = (jobTitle, sendData, limitDate, wage, location, requirements, description) => {
    const newJob = new Job(currentId++, jobTitle, sendData, limitDate, wage, location, requirements, description);
    listJobs.push(newJob);
    return newJob;
}

export const getAllJobs = () => {
    return listJobs;
};

export const getJobById = (id) => {
    const job = listJobs.find(job => job.id === parseInt(id));
    return job ? job : "Não existe uma vaga com este id";
};

export const getJobsByLocation = (location) => {
    const jobsInLocation = listJobs.filter(job => job.location === location);
    return jobsInLocation.length > 0 ? jobsInLocation : "Não existem vagas nesta localização";
};

export const updateJob = (id, jobTitle, limitDate) => {
    const job = listJobs.find(job => job.id === parseInt(id));
    if (job) {
        if (jobTitle) job.jobTitle = jobTitle;
        if (limitDate) job.limitDate = limitDate;
        return job;
    } else {
        return "Não existe uma vaga com este id";
    }
};

export const deleteJob = (id) => {
    const jobIndex = listJobs.findIndex(job => job.id === parseInt(id));
    if (jobIndex !== -1) {
        const [deletedJob] = listJobs.splice(jobIndex, 1);
        return deletedJob;
    } else {
        return "Não existe uma vaga com este id";
    }
};
