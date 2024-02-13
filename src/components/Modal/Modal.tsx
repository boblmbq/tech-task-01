import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { MouseEventType } from '../../types';
import { ModalWrapper } from './Modal.styled';

type ModalProps = {
	handleClose: () => void;
	children: React.ReactElement;
};

export function Modal({ handleClose, children }: ModalProps) {
	const modalContainer = document.getElementById('portal');

	const handleEscapeClick = (event: KeyboardEvent) => {
		if (event.key.toLocaleLowerCase() === 'escape') {
			handleClose();
		}
	};

	const handleBackdropClick = (event: MouseEventType) => {
		const { target, currentTarget } = event;
		if (target === currentTarget) handleClose();
	};

	useEffect(() => {
		window.addEventListener('keydown', handleEscapeClick);

		return () => {
			window.removeEventListener('keydown', handleEscapeClick);
		};
	});

	if (!modalContainer) {
		return null;
	}

	return ReactDOM.createPortal(
		<ModalWrapper
			onClick={(event: MouseEventType) => handleBackdropClick(event)}
		>
			{children}
		</ModalWrapper>,
		modalContainer
	);
}
