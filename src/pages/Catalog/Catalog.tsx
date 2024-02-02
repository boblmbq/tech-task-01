import { useGetCarsQuery } from '../../redux/carsApi';

function Catalog() {
	const { data, error, isLoading } = useGetCarsQuery(2);
	return <div>catalog</div>;
}

export default Catalog;
