import React, { PropsWithChildren } from 'react';
import { Container } from '@mui/material';
import { NavBarComponent } from '@/common/components';

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<NavBarComponent />
			<Container
				maxWidth='lg'
				sx={{ backgroundColor: '#f0f8ff', minHeight: '100vh' }}
			>
				{children}
			</Container>
		</>
	);
};
