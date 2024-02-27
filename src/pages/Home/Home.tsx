import TextWriter from 'components/TextWriter/TextWriter';

function Home() {
	const words = 'Best Wheels to rent';
	return (
		<div>
			<TextWriter words={words} />
		</div>
	);
}
export default Home;
