import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobListings from './components/JobListings';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

// loaders
const isProd = window.location.href.includes('sarahcavs.com');
const prodUrl = 'https://jobsearch.sarahcavs.com/api';
console.log({ isProd });

const App = () => {
	const addJob = async (newJob) => {
		const res = await fetch(
			isProd ? `${prodUrl}/jobs` : 'http://localhost:6001/api/jobs',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newJob),
			}
		);
		return;
	};

	const deleteJob = async (id) => {
		const res = await fetch(
			isProd ? `${prodUrl}/jobs/${id}` : `http://localhost:6001/api/jobs/${id}`,
			{
				method: 'DELETE',
			}
		);
		return;
	};

	const updatedJob = async (job) => {
		const res = await fetch(
			isProd
				? `${prodUrl}/jobs/${job.id}`
				: `http://localhost:6001/api/jobs/${job.id}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(job),
			}
		);
		return res;
	};
	const routes = [
		// unauthenticated routes
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{ path: '', element: <HomePage /> },
				{ path: 'about', element: <div>about</div> },
				{ path: '*', element: <NotFoundPage /> },
				{ path: '/add-job', element: <AddJobPage addJobSubmit={addJob} /> },
			],
		},
		// authenticated routes
		{
			path: '/jobs',
			element: <MainLayout />,
			children: [
				{ path: '', element: <JobsPage /> },
				{
					path: 'edit-job/:id',
					element: <EditJobPage updatedJobSubmit={updatedJob} />,
					loader: jobLoader,
				},
				{
					path: ':id',
					element: <JobPage deleteJob={deleteJob} />,
					loader: jobLoader,
				},
			],
		},
	];

	const router = createBrowserRouter(routes);
	return <RouterProvider router={router} />;
};
export default App;
