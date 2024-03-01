import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function TextWriter() {
	const element = useRef(null);

	useEffect(() => {
		const typed = new Typed(element.current, {
			strings: [
				'Best Wheels to <strong>Rent</strong>',
				'Best Wheels to <strong>Ride</strong>',
				'Best Wheels to <strong>Entertainment</strong>',
			],
			startDelay: 2500,
			typeSpeed: 60,
			backSpeed: 60,
			backDelay: 1300,
			smartBackspace: true,
		});
		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<h1>
			<span ref={element} />
		</h1>
	);
}

export default TextWriter;
