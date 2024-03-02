import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { TextWrapper, Text } from './TextWriter.styled';

function TextWriter() {
	const element = useRef(null);

	useEffect(() => {
		const typed = new Typed(element.current, {
			strings: [
				'Best Wheels to <strong>Rent</strong>',
				'Best Wheels to <strong>Ride</strong>',
				'Best Wheels for <strong>Entertainment</strong>',
			],
			startDelay: 500,
			typeSpeed: 60,
			backSpeed: 45,
			backDelay: 1300,
			smartBackspace: true,
		});
		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<TextWrapper>
			<Text>
				<span ref={element} />
			</Text>
		</TextWrapper>
	);
}

export default TextWriter;
