import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { usePaginationContext } from '@/common/providers';
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
} from '@mui/material';
import 'animate.css';

interface Props {
	children: ReactNode;
	dataCollection: any[];
	columnsId: string[];
}

export const TablePaginationComponent: FC<PropsWithChildren<Props>> = props => {
	const { children, dataCollection, columnsId } = props;
	const {
		currentPage: page,
		setCurrentPage: setPage,
		rowsPerPage,
		setRowsPerPage,
	} = usePaginationContext();

	const createColumns = (columnsId: string[]) => {
		return columnsId.map(datakey => ({
			id: datakey,
			label: datakey.toUpperCase(),
			minWidth: 170,
		}));
	};
	const columns = createColumns(columnsId);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper sx={{ width: '100%' }}>
			<TableContainer>
				<Table stickyHeader aria-label='sticky table'>
					<TableHead>
						<TableRow>
							{columns.map(column => (
								<TableCell
									key={column.id}
									align='center'
									style={{ top: 0, minWidth: column.minWidth }}
								>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>{children}</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 50]}
				component='div'
				count={dataCollection.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
};
