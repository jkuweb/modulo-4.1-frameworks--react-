import React from 'react';
import { AppLayout, MemberLayout } from '@/layouts';
import { CharacterDetailContainer } from '@/pods/rickandmorty/character-member';

export const CharacterDetailScene: React.FC = () => {
	return (
		<AppLayout>
			<MemberLayout>
				<CharacterDetailContainer />
			</MemberLayout>
		</AppLayout>
	);
};
