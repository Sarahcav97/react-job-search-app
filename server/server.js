const express = require('express');
const cors = require('cors');
const path = require('path');
const {
	getJobs,
	rewriteJobs,
	makeId,
	findById,
	findByIdAndDelete,
} = require('./helpers');
const app = express();
app.use(cors());
app.use(express.json());
require('dotenv').config();
// routes

// CREATE
app.post('/api/jobs', async (req, res) => {
	try {
		const newJob = req.body;
		newJob.id = makeId();
		// read the existing jobs from json
		const jsonData = getJobs();

		// add new job to json
		jsonData.jobs.push(newJob);

		// write the updated file
		rewriteJobs(jsonData);

		// return updated json file
		res.json(jsonData);
	} catch (error) {
		res.status(500).json({ error });
	}
});

// READ
// get all jobs
app.get('/api/jobs', async (req, res) => {
	console.log('getting job data');
	const jobsData = getJobs();

	res.json(jobsData.jobs);
});

// get one job by ID
app.get('/api/jobs/:id', async (req, res) => {
	try {
		console.log('getting job data for ID:', req.params.id);
		console.log(req.params);

		// find the job with the ID
		const thisJob = findById(req.params.id);

		res.json(thisJob);
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
});

// UPDATE
app.put('/api/jobs/:id', async (req, res) => {
	try {
		const job = req.body;
		console.log({ job });

		// Remove the existing job entry and prepare for update
		const jobsWithoutTarget = findByIdAndDelete(req.params.id);

		// Update the array of jobs
		const updatedJobs = rewriteJobs({
			jobs: [...jobsWithoutTarget, job],
		});

		res.json(updatedJobs);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' });
	}
});

// DELETE
app.delete('/api/jobs/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const jobsWithoutDeleted = findByIdAndDelete(id);
		const updatedJobs = rewriteJobs({ jobs: jobsWithoutDeleted });
		res.json({ success: true, jobs: updatedJobs.jobs });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal server error' });
	}
});

// if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(__dirname, '..', 'client/dist')));
app.get('*', (req, res) => {
	console.log('sending react app');
	res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});
// }
app.listen(6001, () => {
	console.log('app is running at http://localhost:6001');
});
