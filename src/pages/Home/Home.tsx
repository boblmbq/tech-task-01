import InfiniteMovCards from 'components/InfiniteMovCards';
import TextWriter from 'components/TextWriter/TextWriter';
import AdCars from 'components/adCars';
import adCarInfo from 'information/homePageAdCars.json';

function Home() {
	const words = 'Best Wheels to rent';
	return (
		<div>
			<TextWriter words={words} />

			<InfiniteMovCards>
				<AdCars data={adCarInfo} />
			</InfiniteMovCards>
		</div>
	);
}
export default Home;
