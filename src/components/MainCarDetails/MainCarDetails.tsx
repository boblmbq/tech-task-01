import { HighlightedText } from 'components/CarItem/CarItem.styled';
import {
	CarModalNameYearText,
	DescriptionModalWrapper,
} from 'components/CarModal/CarModal.styled';
import DetailedInfoList from 'components/DetailedInfoListWrapper';
import { DetailedListModalWrapper } from './MainCarDetails.styled';
import { MainCarDetailsProps } from './MainCarDetailsProps.types';

function MainCarDetails(mainDetails: MainCarDetailsProps) {
	const { make, year, model, mainCarInfo, description } = mainDetails;

	return (
		<div>
			<CarModalNameYearText>
				{make} <HighlightedText>{model}</HighlightedText>, {year}
			</CarModalNameYearText>

			<DetailedListModalWrapper>
				<DetailedInfoList information={mainCarInfo} />
			</DetailedListModalWrapper>

			<DescriptionModalWrapper>{description}</DescriptionModalWrapper>
		</div>
	);
}

export default MainCarDetails;
