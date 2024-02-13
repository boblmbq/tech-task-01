import { HighlightedText } from '../../CarItem/CarItem.styled';
import DetailedInfoList from '../../DetailedInfoListWrapper/DetailedInfoListWrapper';
import {
	CarModalNameYearText,
	DescriptionModalWrapper,
} from '../CarModal.styled';
import { DetailedListModalWrapper } from './MainCarDetails.styled';

type MainCarDetailsProps = {
	make: string;
	year: number;
	model: string;
	mainCarInfo: string[];
	description: string;
};

function MainCarDetails({
	make,
	year,
	model,
	mainCarInfo,
	description,
}: MainCarDetailsProps) {
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
