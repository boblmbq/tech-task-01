import { Button, ButtonWrapper } from './LoadMoreBtn.styled';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

function LoadMoreBtn({ handleIncrementPage }: LoadMoreBtnProps) {
	return (
		<ButtonWrapper>
			<Button type='button' onClick={() => handleIncrementPage()}>
				Load more
			</Button>
		</ButtonWrapper>
	);
}

export default LoadMoreBtn;
