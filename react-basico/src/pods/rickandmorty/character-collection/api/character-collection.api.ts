import { ENV_VARIABLES } from '@/core/env';
import {
	CharacterMemberApiModel,
	PaginationInfo,
} from './character-collection.api.model';

// let paginationInfo: PaginationInfo = {
// 	count: 0,
// 	pages: 0,
// 	next: null,
// 	prev: null,
// };
export const getCharacterCollectionApi = async (
	characterName?: string
): Promise<CharacterMemberApiModel[]> => {
	const response = await fetch(
		`${ENV_VARIABLES.CHARACTERS_API_BASE_URL}/character/?name=${characterName}`
	).then(response => response.json());
	// paginationInfo = { ...response.info };

	return response.results;
};

export const getCharacterCollectionPerPage = async (page: string) => {
	const response = await fetch(
		`${ENV_VARIABLES.CHARACTERS_API_BASE_URL}/character/?page=${page}`
	).then(response => response.json());

	// paginationInfo = { ...response.info };

	return response.results;
};
// export const getPaginationInfo = (): PaginationInfo => paginationInfo;
