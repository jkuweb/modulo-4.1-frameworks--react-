import React, { PropsWithChildren } from 'react';
import Grid from '@mui/material/Grid2';

export const MemberLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<Grid
			container
			alignItems='center'
			justifyContent='center'
			sx={{ minHeight: '100vh' }}
		>
			{children}
		</Grid>
	);
};
