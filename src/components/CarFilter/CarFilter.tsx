import { Field, Formik } from 'formik';
import { useAppDispatch } from 'hooks/reduxHooks';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { FlexibleFilters, filterInitialState } from 'types/Filter';
import { selectOptionsVariety } from '../../redux/Car';
import { addFilters } from '../../redux/Filter';
import {
	ExplanationFieldText,
	FormStyled,
	FormikWrapper,
	LabelDescription,
	LabelStyled,
	LabelWrapper,
	MileageFromLabel,
	MileageLabelWrapper,
	MileageToLabel,
	SubmitButton,
} from './CarFilter.styled';

const initialValues: FlexibleFilters = {
	brand: '',
	price: '',
	mileageFrom: '',
	mileageTo: '',
};

function CarFilter() {
	const dispatch = useAppDispatch();
	const [brandVariety, priceVariety] = useSelector(selectOptionsVariety);
	const [searchQuery, setSearchQuery] = useSearchParams();

	const handleSubmit = (values: FlexibleFilters) => {
		const filters = { ...values };
		Object.keys(filters).forEach(k => filters[k] === '' && delete filters[k]);
		setSearchQuery(filters);
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
		<FormikWrapper>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<FormStyled autoComplete='off'>
					<LabelWrapper>
						<LabelDescription>Car brand</LabelDescription>
						<LabelStyled>
							<Field as='select' name='brand'>
								<option value=''>Enter the Text</option>
								{brandVariety?.map(brand => (
									<option key={brand} value={brand}>
										{brand}
									</option>
								))}
							</Field>
						</LabelStyled>
					</LabelWrapper>

					<LabelWrapper>
						<LabelDescription>Price&#x2F; 1 hour</LabelDescription>
						<LabelStyled>
							<ExplanationFieldText>To &#x24;</ExplanationFieldText>
							<Field as='select' name='price'>
								<option value=''></option>
								{priceVariety?.map(price => (
									<option key={price} value={price}>
										{price}
									</option>
								))}
							</Field>
						</LabelStyled>
					</LabelWrapper>

					<LabelWrapper>
						<LabelDescription>Car mileage &#x2F; km</LabelDescription>

						<MileageLabelWrapper>
							<MileageFromLabel>
								<ExplanationFieldText>From</ExplanationFieldText>
								<Field as='input' name='mileageFrom' />
							</MileageFromLabel>

							<MileageToLabel>
								<ExplanationFieldText>To</ExplanationFieldText>
								<Field as='input' name='mileageTo' />
							</MileageToLabel>
						</MileageLabelWrapper>
					</LabelWrapper>
					<SubmitButton type='submit'>Search</SubmitButton>
				</FormStyled>
			</Formik>
		</FormikWrapper>
	);
}

export default CarFilter;
