import { ContainerProps } from '../ContainerProps.types';
import { CenteredDiv } from './CenteredContainer.styled';

function CenteredContainer({ children }: ContainerProps) {
	return <CenteredDiv>{children}</CenteredDiv>;
}

export default CenteredContainer;
