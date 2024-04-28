import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const MainLayout = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			<ToastContainer />
		</div>
	);
};
export default MainLayout;
