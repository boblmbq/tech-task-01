import { CarImage, CarImageWrapper, Figure } from './AdCars.styled';
import { AdCarsProps } from './AdCars.types';

function AdCars({ data }: AdCarsProps) {
	return (
		<div>
			{data.map(({ image, text }) => {
				return (
					<Figure key={text}>
						<CarImageWrapper>
							<CarImage src={image} alt='car' />
						</CarImageWrapper>
					</Figure>
				);
			})}
		</div>
	);
}

export default AdCars;
