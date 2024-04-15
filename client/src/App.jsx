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

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			index
			elements={<h1>My</h1>}
		/>
	)
);
const App = () => {
	return (
		<div id='app-container'>
			<Navbar />
			<Hero />
			<HomeCards />
			<JobListings />
			<ViewAllJobs />
		</div>
	);
};
export default App;
