import ChooseFirstCar from 'components/ChooseFirstCar';
import InfiniteMovCards from 'components/InfiniteMovCards';
import TextWriter from 'components/TextWriter/TextWriter';
import WhyUs from 'components/WhyUs';
import AdCars from 'components/adCars';
import adCarInfo from 'information/homePageAdCars.json';
import HomeSection from './HomeLayout/HomeSection';
import {
	CenteredFSWrapper,
	MovingCardsSection,
	WhyUsCentered,
} from './HomeLayout/HomeSection.styled';
import Footer from 'components/Footer';

function Home() {
	return (
		<>
			<main>
				<HomeSection children={<TextWriter />} />

				<MovingCardsSection>
					<InfiniteMovCards>
						<AdCars data={adCarInfo} />
					</InfiniteMovCards>
				</MovingCardsSection>

				<HomeSection
					children={
						<WhyUsCentered>
							<WhyUs />
						</WhyUsCentered>
					}
				/>

				<HomeSection
					children={
						<CenteredFSWrapper>
							<ChooseFirstCar />
						</CenteredFSWrapper>
					}
				/>
			</main>
			<Footer />
		</>
	);
}
export default Home;
