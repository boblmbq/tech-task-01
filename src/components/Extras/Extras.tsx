import { CategoriesModalTitleWrapper } from 'components/CarModal/CarModal.styled';
import DetailedInfoList from 'components/DetailedInfoListWrapper';
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
