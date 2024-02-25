import { ContainerProps } from '../ContainerProps.types';
import { RestrictiveDiv } from './MainContainer.styled';

function Container({ children }: ContainerProps) {
	return <RestrictiveDiv>{children}</RestrictiveDiv>;
}

export default Container;
