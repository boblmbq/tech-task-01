import DetailedInfoList from '../../DetailedInfoListWrapper/DetailedInfoListWrapper';
import { CategoriesModalTitleWrapper } from '../CarModal.styled';
type ExtrasProps = {
	extrasInfo: string[];
};

function Extras({ extrasInfo }: ExtrasProps) {
	return (
		<div>
			<CategoriesModalTitleWrapper>
				Accessories and functionalities:
			</CategoriesModalTitleWrapper>

				<DetailedInfoList information={extrasInfo} />
		</div>
	);
}

export default Extras;
