const fs = require('fs');
const path = require('path');
const Job = require('../models/job');

//delete old image

function df(x) {
    try{
        if(!x) return;
        const fullPath = path.join(__dirname, '..', 'uploads', x);
        if (fs.existsSync(fullPath)) { fs.unlinkSync(fullPath);
            console.log(`Deleted file: ${fullPath}`);
        } }
    catch(err) {
            console.error(`Error deleting file: ${fullPath}`,err);
        }
    }

//job add
exports.createjob = async (req, res) => {
    const { title, company, location, salary, jobType, description } = req.body;
    const jobimage = req.file ? '/uploads/jobs/' + req.file.filename : null;
    const newJob = await Job.create({ title, company, location, salary, jobType, description, jobimage });
    res.status(201).json({ message: "Job created successfully", job: newJob });
}

//get all jobs
exports.viewalljobs = async (req, res) => {
    const jobs = await Job.find();
    res.status(200).json({ message: "All jobs retrieved successfully", total: jobs.length, jobs });
}

//get single job
exports.viewsinglejob = async (req, res) => {
    const { id } = req.params;
    const jobDoc = await Job.findById(id);
    if (!jobDoc) return res.status(404).json({ message: "Job not found" });
    res.status(200).json({ message: "Job retrieved successfully", job: jobDoc });
}
//delete job
exports.deletejob = async (req, res) => {
    const { id } = req.params;
    const jobToDelete = await Job.findById(id);
    if (!jobToDelete) return res.status(404).json({ message: "Job not found" });
    df(jobToDelete.jobimage);
    await Job.findByIdAndDelete(id);
    res.status(200).json({ message: "Job deleted successfully" });
}