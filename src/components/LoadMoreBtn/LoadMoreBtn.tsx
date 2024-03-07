import { Button } from './LoadMoreBtn.styled';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

function LoadMoreBtn({ handleIncrementPage }: LoadMoreBtnProps) {

	return (
		<Button type='button' onClick={() => handleIncrementPage()}>
			Load more
		</Button>
	);
}

export default LoadMoreBtn;
