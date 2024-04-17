import ClipLoader from 'react-spinners/ClipLoader';
const override = {
	display: 'block',
	margin: '100px auto',
};

const Spinner = ({ loading }) => {
	return (
		<ClipLoader
			color='#4339ca'
			loading={loading}
			cssOverride={override}
			side={150}
		/>
	);
};
export default Spinner;
