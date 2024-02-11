import React from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper } from './Modal.styled';

type ModalProps = {
	isOpen: boolean;
	children: React.ReactElement;
};

export function Modal({ isOpen, children }: ModalProps) {
	const modalContainer = document.getElementById('portal');

	if (!modalContainer || !isOpen) {
		return null;
	}

	return ReactDOM.createPortal(
		<ModalWrapper>{children}</ModalWrapper>,
		modalContainer
	);
}
