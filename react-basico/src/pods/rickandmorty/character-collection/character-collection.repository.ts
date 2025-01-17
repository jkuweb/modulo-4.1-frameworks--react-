import {
	getCharacterCollectionApi,
	getCharacterCollectionPerPage,
} from './api';
import { mapCharacterCollectionToVm } from './character-collection.mapper';
import { CharacterViewModel } from './characters-collection.vm';

export const getCharacterCollectionRepository = (
	characterName?: string
): Promise<CharacterViewModel[]> => {
	return new Promise(resolve => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getCharacterCollectionApi(characterName).then(result =>
			resolve(mapCharacterCollectionToVm(result))
		);
	});
};

export const getCharacterPerPage = (page: string) => {
	return new Promise(resolve => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getCharacterCollectionPerPage(page).then(result =>
			resolve(mapCharacterCollectionToVm(result))
		);
	});
};
