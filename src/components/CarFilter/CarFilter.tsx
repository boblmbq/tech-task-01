import { Formik } from 'formik';
import { useAppDispatch } from 'hooks/reduxHooks';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { FlexibleFilters, filterInitialState } from 'types/Filter';
import { selectOptionsVariety } from '../../redux/Car';
import { addFilters } from '../../redux/Filter';
import {
	ExplanationFieldText,
	FieldStyled,
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
		<FormikWrapper>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<FormStyled>
					<LabelWrapper>
						<LabelDescription>Car brand</LabelDescription>
						<LabelStyled>
							<FieldStyled as='select' name='brand'>
								<option value=''>Enter the Text</option>
								{brandVariety?.map(brand => (
									<option key={brand} value={brand}>
										{brand}
									</option>
								))}
							</FieldStyled>
						</LabelStyled>
					</LabelWrapper>

					<LabelWrapper>
						<LabelDescription>Price&#x2F; 1 hour</LabelDescription>
						<LabelStyled>
							<ExplanationFieldText>To &#x24;</ExplanationFieldText>
							<FieldStyled as='select' name='price'>
								<option value=''></option>
								{priceVariety?.map(price => (
									<option key={price} value={price}>
										{price}
									</option>
								))}
							</FieldStyled>
						</LabelStyled>
					</LabelWrapper>

					<LabelWrapper>
						<LabelDescription>Car mileage &#x2F; km</LabelDescription>

						<MileageLabelWrapper>
							<MileageFromLabel>
								<ExplanationFieldText>From</ExplanationFieldText>
								<FieldStyled name='mileageFrom' />
							</MileageFromLabel>

							<MileageToLabel>
								<ExplanationFieldText>To</ExplanationFieldText>
								<FieldStyled name='mileageTo' />
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
