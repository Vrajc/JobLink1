const express = require('express');
const { getJob, createJobs, updateJobs, deleteJobs } = require('../controllers/jobcontroller');

const router = express.Router();

router.get('/getjobs', getJob);
router.post('/postjobs', createJobs);
router.put('/putjobs/:id', updateJobs);
router.delete('/deletejobs/:id', deleteJobs);

module.exports = router;