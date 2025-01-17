import { AppLayout, TableLayout } from '@/layouts';
import { CharacterCollectionContainer } from '@/pods/rickandmorty/character-collection';
import React from 'react';

export const CharacterCollectionScene: React.FC = () => {
	return (
		<AppLayout>
			<TableLayout>
				<CharacterCollectionContainer />
			</TableLayout>
		</AppLayout>
	);
};
