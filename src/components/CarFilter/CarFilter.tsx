//? filter logic
// 1. let the user to choose the filters
// 2. submitting the filters
// 3. setting the filters in redux
// 4. taking the filters from redux in carlist
// 5. filtering the early fetched array of cars by using the filters with fnc. like:
// [array].filter(car => {
// return car.mileage < filter.fromMileage && car.mileage > filter.toMileage && ...
// }
// setting the cars with the filtered cars

import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { fetchBrandAndPriceVariety } from '../../redux/Car/carOperations';
import {
	selectBrandVariety,
	selectPriceVariety,
} from '../../redux/Car/carSelectors';
import { FlexibleFilters } from '../../types';

const initialValues: FlexibleFilters = {
	brand: '',
	price: '',
	carMileageFrom: '',
	carMileageTo: '',
};

function CarFilter() {
	const dispatch = useAppDispatch();
	const brandVariety = useSelector(selectBrandVariety);
	const priceVariety = useSelector(selectPriceVariety);
	const [_, setSearchQuery] = useSearchParams();

	useEffect(() => {
		dispatch(fetchBrandAndPriceVariety());
	}, [dispatch]);

	const handleSubmit = (
		values: FlexibleFilters,
		action: FormikHelpers<FlexibleFilters>
	) => {
		Object.keys(values).forEach(k => values[k] === '' && delete values[k]);

		setSearchQuery(values);
	};

	return (
		<div>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<Form>
					<label>
						brand
						<Field as='select' name='brand'>
							<option value=''></option>
							{brandVariety?.map(brand => (
								<option value={brand}>{brand}</option>
							))}
						</Field>
					</label>

					<label>
						price
						<Field as='select' name='price'>
							<option value=''></option>
							{priceVariety?.map(price => (
								<option value={price}>{price}</option>
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
