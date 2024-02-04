import React from 'react';
import { RestrictiveDiv } from './Container.styled';

type ContainerProps = {
	children: React.ReactElement;
};

function Container({ children }: ContainerProps) {
	return <RestrictiveDiv>{children}</RestrictiveDiv>;
}

export default Container;
