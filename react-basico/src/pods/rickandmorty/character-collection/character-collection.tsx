import React from 'react';
import { CharactersTableComponent } from './components';
import { CharacterViewModel } from './characters-collection.vm';

interface Props {
	characters: CharacterViewModel[];
}

export const CharacterCollection: React.FC<Props> = ({ characters }) => {
	return (
		<section className='w-full'>
			<CharactersTableComponent characters={characters} />
		</section>
	);
};
