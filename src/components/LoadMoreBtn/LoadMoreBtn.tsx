import { incrementPage } from '../../redux/carSlice/carSlice';
import { useAppDispatch } from '../../redux/store/store';
import { Button, ButtonWrapper } from './LoadMoreBtn.styled';

function LoadMoreBtn() {
	const dispatch = useAppDispatch();
	return (
		<ButtonWrapper>
			<Button type='button' onClick={() => dispatch(incrementPage())}>
				Load more
			</Button>
		</ButtonWrapper>
	);
}

export default LoadMoreBtn;
