import { useEffect, useState } from 'react';
import CarsList from '../../components/CarsList/CarsList';
import { useGetAllCarsQuery, useGetCarsQuery } from '../../redux/carsApi';

function Catalog() {
	const [page, setPage] = useState(1);
	const [filters, setFilters] = useState({});
	const [newdata, setnewdata] = useState([]);
	// the project is freezed due to overworked programmer
	// the project will still be freeze till 07.02.2024
	const { data, error, isLoading } = useGetCarsQuery(page);
	const { data: fullData } = useGetAllCarsQuery(filters);

	console.log(fullData);

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
