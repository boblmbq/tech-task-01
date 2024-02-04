import { useEffect, useState } from 'react';
import CarsList from '../../components/CarsList/CarsList';
import { useGetCarsQuery } from '../../redux/carsApi';

function Catalog() {
	const [page, setPage] = useState(1);
	const { data, error, isLoading } = useGetCarsQuery(page);
	const [newdata, setnewdata] = useState([]);

	useEffect(() => {
		if (data) {
			setnewdata(prev => prev.concat(data));
		}
	}, [data]);

	console.log(newdata);

	return (
		newdata && (
			<>
				<CarsList data={newdata} />
				<button
					onClick={() => {
						setPage(prev => prev + 1);
					}}
				>
					load more
				</button>
			</>
		)
	);
}

export default Catalog;
