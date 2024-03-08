import CenteredContainer from 'components/Container/CenteredContainer/CenteredContainer';
import { Watch } from 'react-loader-spinner';
import { LoadingText, LoadingTextWrapper } from './LoadingPage.styled';

function LoadingPage() {
	return (
		<CenteredContainer>
			<LoadingTextWrapper>
				<LoadingText>It could take a while for the page to load</LoadingText>
				<LoadingText>If it takes to long, try reloading the page</LoadingText>
				<Watch
					visible={true}
					height='100'
					width='100'
					radius='48'
					color='#3470ff'
					ariaLabel='watch-loading'
				/>
			</LoadingTextWrapper>
		</CenteredContainer>
	);
}

export default LoadingPage;
