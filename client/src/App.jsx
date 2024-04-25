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

// loaders

const routes = [
	// unauthenticated routes
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{ path: '', element: <HomePage /> },
			{ path: 'about', element: <div>about</div> },
			{ path: '*', element: <NotFoundPage /> },
		],
	},
	// authenticated routes
	{
		path: '/jobs',
		element: <MainLayout />,
		children: [
			{ path: '', element: <JobsPage /> },
			{ path: ':id', element: <JobPage />, loader: jobLoader },
		],
	},
];

const router = createBrowserRouter(routes);
const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
