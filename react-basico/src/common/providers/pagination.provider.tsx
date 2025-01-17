import {
	createContext,
	FC,
	PropsWithChildren,
	useContext,
	useState,
} from 'react';

interface PaginationContextModel {
	currentPage: number;
	rowsPerPage: number;
	setCurrentPage: (value: number) => void;
	setRowsPerPage: (value: number) => void;
}

export const PaginationContext = createContext<PaginationContextModel>({
	currentPage: 0,
	rowsPerPage: 10,
	setCurrentPage: () => {},
	setRowsPerPage: () => {},
});

export const PaginationProvider: FC<PropsWithChildren> = ({ children }) => {
	const [currentPage, setCurrentPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	return (
		<PaginationContext.Provider
			value={{ currentPage, setCurrentPage, rowsPerPage, setRowsPerPage }}
		>
			{children}
		</PaginationContext.Provider>
	);
};

export const usePaginationContext = (): PaginationContextModel =>
	useContext(PaginationContext);
