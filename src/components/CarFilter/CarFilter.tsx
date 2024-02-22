import { Field, Form, Formik } from 'formik';
import { useAppDispatch } from 'hooks/reduxHooks';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { FlexibleFilters, filterInitialState } from 'types/Filter';
import { selectOptionsVariety } from '../../redux/Car';
import { addFilters } from '../../redux/Filter';

const initialValues: FlexibleFilters = {
	brand: undefined,
	price: undefined,
	mileageFrom: undefined,
	mileageTo: undefined,
};

function CarFilter() {
	const dispatch = useAppDispatch();
	const [brandVariety, priceVariety] = useSelector(selectOptionsVariety);
	const [searchQuery, setSearchQuery] = useSearchParams();

	const handleSubmit = (values: FlexibleFilters) => {
		Object.keys(values).forEach(
			k => values[k] === undefined && delete values[k]
		);
		setSearchQuery(values);
	};

	useEffect(() => {
		let filters: { [x: string]: any } & filterInitialState = {
			...initialValues,
			onFilter: false,
		};

		if (searchQuery.size > 0) {
			searchQuery.forEach((value, key) => {
				filters[key] = value;
			});
			filters.onFilter = true;
		}
		dispatch(addFilters(filters));
	}, [searchQuery, dispatch]);

	return (
		<div>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<Form>
					<label>
						brand
						<Field as='select' name='brand'>
							<option value=''></option>
							{brandVariety?.map(brand => (
								<option key={brand} value={brand}>
									{brand}
								</option>
							))}
						</Field>
					</label>

					<label>
						price
						<Field as='select' name='price'>
							<option value=''></option>
							{priceVariety?.map(price => (
								<option key={price} value={price}>
									{price}
								</option>
							))}
						</Field>
					</label>

					<label>
						<Field name='carMileageFrom' />
						<Field name='carMileageTo' />
					</label>

					<button type='submit'>Search</button>
				</Form>
			</Formik>
		</div>
	);
}

export default CarFilter;
