import { getCharacterDetailApi } from './api';
import { mapCharacterDetailToVm } from './character-detail.mapper';
import { CharacterDetailViewModel } from './character-detail.vm';

export const getCharacterDetailRepository = (
	id: string
): Promise<CharacterDetailViewModel> => {
	return new Promise(resolve => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getCharacterDetailApi(id).then(response =>
			resolve(mapCharacterDetailToVm(response))
		);
	});
};
