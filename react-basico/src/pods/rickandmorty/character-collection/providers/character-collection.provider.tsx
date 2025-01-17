import React, { PropsWithChildren } from 'react';
import {
	getCharacterCollectionRepository,
	getCharacterPerPage,
} from '../character-collection.repository';
import {
	CharacterViewModel,
	createEmptyCharacterCollection,
} from '../characters-collection.vm';

interface CharacterContext {
	characters: CharacterViewModel[];
	setFilter: (value: string) => void;
	setPage: (value: string) => void;
	page: string;
}

const CharacterContext = React.createContext<CharacterContext>({
	characters: [],
	setFilter: () => {},
	setPage: () => {},
	page: '1',
});

export const CharacterProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const [characters, setCharacters] = React.useState<CharacterViewModel[]>(
		createEmptyCharacterCollection()
	);
	const [filter, setFilter] = React.useState('');
	const [page, setPage] = React.useState('0');

	React.useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getCharacterCollectionRepository(filter).then(setCharacters);
	}, [filter]);

	React.useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getCharacterPerPage(page).then(setCharacters);
	}, [page]);

	return (
		<CharacterContext.Provider value={{ characters, setFilter, page, setPage }}>
			{children}
		</CharacterContext.Provider>
	);
};

export const useCharacterContext = () => React.useContext(CharacterContext);
