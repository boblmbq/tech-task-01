import { AdCarsProps } from './AdCars.types';

function AdCars({ data }: AdCarsProps) {
	return (
		<>
			{data.map(({ image, text }) => {
				return (
					<figure>
						<div>
							<img src={image} alt='car' />
						</div>
						<figcaption>{text}</figcaption>
					</figure>
				);
			})}
		</>
	);
}

export default AdCars;
