import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { MouseEventCustomized } from 'types/Events';
import { ModalWrapper } from './Modal.styled';
import { ModalProps } from './ModalProps.types';

function Modal({ handleClose, children }: ModalProps) {
	const modalContainer = document.getElementById('portal');

	const handleEscapeClick = (event: KeyboardEvent) => {
		if (event.key.toLocaleLowerCase() === 'escape') {
			handleClose();
		}
	};

	const handleBackdropClick = (event: MouseEventCustomized) => {
		const { target, currentTarget } = event;
		if (target === currentTarget) handleClose();
	};

	useEffect(() => {
		window.addEventListener('keydown', handleEscapeClick);
		document.body.style.overflow = 'hidden';

		return () => {
			window.removeEventListener('keydown', handleEscapeClick);
			document.body.style.overflow = 'auto';
		};
	});

	if (!modalContainer) {
		return null;
	}

	return ReactDOM.createPortal(
		<ModalWrapper
			onClick={(event: MouseEventCustomized) => handleBackdropClick(event)}
		>
			{children}
		</ModalWrapper>,
		modalContainer
	);
}

export default Modal;
