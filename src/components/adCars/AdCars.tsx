import { CarImage, CarImageWrapper, Figure } from './AdCars.styled';
import { AdCarsProps } from './AdCars.types';

function AdCars({ data }: AdCarsProps) {
	return (
		<>
			{data.map(({ image, text }) => {
				return (
					<Figure key={text}>
						<CarImageWrapper>
							<CarImage src={image} alt='car' />
						</CarImageWrapper>
						{/* <figcaption>{text}</figcaption> */}
					</Figure>
				);
			})}
		</>
	);
}

export default AdCars;
