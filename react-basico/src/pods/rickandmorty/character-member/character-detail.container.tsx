import React from 'react';
import { useParams } from 'react-router-dom';
import { CharacterDetail } from './character-detail.component';
import {
	CharacterDetailViewModel,
	createEmptyCharacterDetail,
} from './character-detail.vm';
import { useCharacterDetailContext } from './providers';

export const CharacterDetailContainer: React.FC = () => {
	const { getCharacterDetail } = useCharacterDetailContext();
	const [member, setMember] = React.useState<CharacterDetailViewModel>(
		createEmptyCharacterDetail()
	);
	const { id } = useParams();

	React.useEffect(() => {
		if (id) {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			getCharacterDetail(id).then(setMember);
		}
	}, [id]);

	return <CharacterDetail member={member} />;
};
