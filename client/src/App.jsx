import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';
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
