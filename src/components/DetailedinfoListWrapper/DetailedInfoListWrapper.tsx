import {
	DetailedInfoListWrapper,
	DetailedInfoTextWrapper,
} from 'components/CarsList/CarsList.styled';
import uuid from 'react-uuid';
import { DetailedInfoListWrapperProps } from './DetailedInfoListWrapperProps.types';

function DetailedInfoList({ information }: DetailedInfoListWrapperProps) {
	return (
		<DetailedInfoListWrapper>
			{information.map(info => (
				<DetailedInfoTextWrapper key={uuid()}>{info}</DetailedInfoTextWrapper>
			))}
		</DetailedInfoListWrapper>
	);
}

export default DetailedInfoList;
