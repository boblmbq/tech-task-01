import InfiniteMovCards from 'components/InfiniteMovCards';
import TextWriter from 'components/TextWriter/TextWriter';
import WhyUs from 'components/WhyUs';
import AdCars from 'components/adCars';
import adCarInfo from 'information/homePageAdCars.json';

function Home() {
	return (
		<div>
			<TextWriter />
			<InfiniteMovCards>
				<AdCars data={adCarInfo} />
			</InfiniteMovCards>
			<WhyUs />
		</div>
	);
}
export default Home;
