const Job = require('../models/Job');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Get all jobs
const getJob = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Create a new job
const createJobs = async (req, res) => {
  try {
    const { title, company, location, description, requirements, salary, jobType } = req.body;
    const newJob = new Job({ title, company, location, description, requirements, salary, jobType });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a job
const updateJobs = async (req, res) => {
  try {
    const updatedJobs = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedJobs) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json({ message: 'Job updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a job
const deleteJobs = async (req, res) => {
  try {
    const deletedJobs = await Job.findByIdAndDelete(req.params.id);
    if (!deletedJobs) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getJob,
  createJobs,
  updateJobs,
  deleteJobs
};
