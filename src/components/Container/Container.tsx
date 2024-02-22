import { RestrictiveDiv } from './Container.styled';
import { ContainerProps } from './ContainerProps.types';

function Container({ children }: ContainerProps) {
	return <RestrictiveDiv>{children}</RestrictiveDiv>;
}

export default Container;
