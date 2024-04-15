import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';

const routes = [
	{ path: '/', element: <div>my app</div> },
	{ path: 'jobs', element: <JobListings /> },
	{ path: 'about', element: <div>about</div> },
];

const router = createBrowserRouter(routes);
const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
