import { Button, ButtonWrapper } from './LoadMoreBtn.styled';

function LoadMoreBtn({
	handleIncrementPage,
}: {
	handleIncrementPage: () => void;
}) {

	return (
		<ButtonWrapper>
			<Button type='button' onClick={() => handleIncrementPage()}>
				Load more
			</Button>
		</ButtonWrapper>
	);
}

export default LoadMoreBtn;
