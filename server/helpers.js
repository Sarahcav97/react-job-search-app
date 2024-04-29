const path = require('path');
const fs = require('fs');
const jsonPath = path.join(__dirname, './db/jobs.json');

// helper
function getJobs() {
	const jsonData = fs.readFileSync(jsonPath, 'utf-8');
	const parsed = JSON.parse(jsonData);
	console.log(`Sending back ${parsed.jobs.length} jobs`);

	return parsed;
}

function rewriteJobs(jobs) {
	fs.writeFileSync(jsonPath, JSON.stringify(jobs, null, 2));
	return jobs;
}

function makeId() {
	return Math.floor(Math.random() * 100).toString();
}

function findById(id) {
	const jobsData = getJobs();
	return jobsData.jobs.filter((job) => job.id === id)[0];
}
// Function to filter out a job by ID
function findByIdAndDelete(id) {
	const jobsData = getJobs();
	return jobsData.jobs.filter((job) => job.id !== id);
}

module.exports = {
	getJobs,
	rewriteJobs,
	makeId,
	findById,
	findByIdAndDelete,
	jsonPath,
};
