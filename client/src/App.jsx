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
import JobPage from './pages/JobPage';

const routes = [
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{ path: '', element: <HomePage /> },
			{ path: '/jobs', element: <JobsPage /> },
			{ path: 'about', element: <div>about</div> },
			{ path: '*', element: <NotFoundPage /> },
			{ path: '/jobs/:id', element: <JobPage /> },
		],
	},
];

const router = createBrowserRouter(routes);
const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
