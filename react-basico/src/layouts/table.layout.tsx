import React, { PropsWithChildren } from 'react';
import classes from '@/style.module.scss';

export const TableLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return <div className={classes.appContainer}>{children}</div>;
};
