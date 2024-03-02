import Container from 'components/Container';

function HomeSection({ children }: { children: React.ReactElement }) {
	return (
		<section>
			<Container>{children}</Container>
		</section>
	);
}

export default HomeSection;
