import { HighlightedText } from 'components/CarItem/CarItem.styled';
import { CategoriesModalTitleWrapper } from 'components/CarModal/CarModal.styled';
import { ConditionsListWrapper } from './RentalConditions.styled';

type RentalConditionsProps = {
	conditions: string;
	mileage: number;
	rentalPrice: string;
};

function RentalConditions({
	conditions,
	mileage,
	rentalPrice,
}: RentalConditionsProps) {
	const conditionsArray = conditions.split('\n');
	const minimumAgeText = conditionsArray[0].split(':');

	return (
		<div>
			<CategoriesModalTitleWrapper>
				Rental Conditions:
			</CategoriesModalTitleWrapper>
			<ConditionsListWrapper>
				<li>
					{minimumAgeText[0]} :
					<HighlightedText>{minimumAgeText[1]}</HighlightedText>
				</li>
				<li>{conditionsArray[1]}</li>
				<li>{conditionsArray[2]}</li>
				<li>
					MiLeage : <HighlightedText>{mileage}</HighlightedText>
				</li>
				<li>
					Rental Price : <HighlightedText>{rentalPrice}</HighlightedText>
				</li>
			</ConditionsListWrapper>
		</div>
	);
}

export default RentalConditions;
