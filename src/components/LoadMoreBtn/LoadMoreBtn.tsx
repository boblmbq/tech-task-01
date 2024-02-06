import { useSelector } from 'react-redux';
import { selectCurrentPage } from '../../redux/carSlice/carSelectors';
import { incrementPage } from '../../redux/carSlice/carSlice';
import { useAppDispatch } from '../../redux/store/store';

function LoadMoreBtn() {
	const dispatch = useAppDispatch();
	const currentPage = useSelector(selectCurrentPage);

	return (
		<button
			type='button'
			onClick={() => dispatch(incrementPage())}
		>
			Load more
		</button>
	);
}

export default LoadMoreBtn;
