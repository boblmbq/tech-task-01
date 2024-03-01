import { ContainerProps } from 'components/Container/ContainerProps.types';
import { FooDiv, InfiniteMovCardsWrapper } from './InfiniteMovCards.styled';

function InfiniteMovCards({ children }: ContainerProps) {
	return (
		<FooDiv>
			<InfiniteMovCardsWrapper>{children}</InfiniteMovCardsWrapper>
			<InfiniteMovCardsWrapper>{children}</InfiniteMovCardsWrapper>
		</FooDiv>
	);
}

export default InfiniteMovCards;
