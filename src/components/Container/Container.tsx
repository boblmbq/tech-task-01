import React from 'react';

type ContainerProps = {
	children: React.ReactElement;
};

function Container({ children }: ContainerProps) {
	return <div>{children}</div>;
}

export default Container;
