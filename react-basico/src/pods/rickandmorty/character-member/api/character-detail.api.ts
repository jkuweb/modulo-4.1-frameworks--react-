import { ENV_VARIABLES } from '@/core/env';
import { CharacterDetailApiModel } from './character-detail.api.model';

export const getCharacterDetailApi = async (
	id: string
): Promise<CharacterDetailApiModel> => {
	return await fetch(
		`${ENV_VARIABLES.CHARACTERS_API_BASE_URL}/character/${id}`
	).then(response => response.json());
};
