import ReactDOM from 'react-dom';
import { RentalCarType } from '../../types';
import { ModalWrapper } from './Modal.styled';

export function Modal({
	isOpen,
	car,
}: {
	isOpen: boolean;
	car: RentalCarType | null;
}) {
	const modalcontainer = document.getElementById('portal');

	if (!modalcontainer) {
		return null;
	}

	return ReactDOM.createPortal(
		<>{isOpen && <ModalWrapper>{car?.rentalPrice}</ModalWrapper>}</>,
		modalcontainer
	);
}
