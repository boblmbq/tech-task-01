import { Li, Ul } from './WhyUs.styled';

function WhyUs() {
	const whyUsText = [
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellat amet dolorum quam.',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellat amet dolorum quam.',
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. At repellat amet dolorum quam.',
	];
	return (
		<div>
			<h2>WhyUs</h2>
			<Ul>
				{whyUsText.map((text, idx) => {
					return <Li key={idx}>{text}</Li>;
				})}
			</Ul>
		</div>
	);
}

export default WhyUs;
