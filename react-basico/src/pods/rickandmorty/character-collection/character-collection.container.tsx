import React from 'react';
import { useCharacterContext } from './providers';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer: React.FC = () => {
	const { characters } = useCharacterContext();

	return (
		<>
			<CharacterCollectionComponent characters={characters} />
		</>
	);
};
