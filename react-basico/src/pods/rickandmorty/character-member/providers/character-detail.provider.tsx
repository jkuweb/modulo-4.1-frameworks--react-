import React, { PropsWithChildren } from 'react';
import { getCharacterDetailRepository } from '../character-detail.repository';
import { CharacterDetailViewModel } from '@/pods/rickandmorty/character-member/character-detail.vm';

interface CharacterDetailContextModel {
	getCharacterDetail: (id: string) => Promise<CharacterDetailViewModel>;
}

export const CharacterDetailContext =
	React.createContext<CharacterDetailContextModel>(null);

export const CharacterDetailProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const [characters, setCharacters] = React.useState({});

	const fetchCharacterRepository = async (id: string) => {
		const character = await getCharacterDetailRepository(id);
		setCharacters({
			...characters,
			[id]: character,
		});

		return character;
	};

	const getCharacterDetail = (id: string) =>
		characters[id]
			? Promise.resolve(characters[id])
			: fetchCharacterRepository(id);

	return (
		<CharacterDetailContext.Provider value={{ getCharacterDetail }}>
			{children}
		</CharacterDetailContext.Provider>
	);
};

export const useCharacterDetailContext = (): CharacterDetailContextModel =>
	React.useContext(CharacterDetailContext);
