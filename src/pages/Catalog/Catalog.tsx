import { useEffect, useState } from 'react';
import CarsList from '../../components/CarsList/CarsList';

function Catalog() {
	const [page, setPage] = useState(1);
	const [filters, setFilters] = useState({});
	const [newdata, setnewdata] = useState([]);

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
