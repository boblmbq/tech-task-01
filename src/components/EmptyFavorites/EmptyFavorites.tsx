import { EmptyFavoritesWrapper, LinkTo, Text } from './EmptyFavorites.styled';

function EmptyFavorites() {
	return (
		<EmptyFavoritesWrapper>
			<Text>Oops, You didn&#8217;t choose any favorite car yet...</Text>
			<Text>
				but you still can do it in <LinkTo to='/catalog'>Catalog</LinkTo>
			</Text>
		</EmptyFavoritesWrapper>
	);
}

export default EmptyFavorites;
