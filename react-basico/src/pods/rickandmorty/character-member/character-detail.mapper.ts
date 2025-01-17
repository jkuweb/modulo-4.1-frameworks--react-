import * as vm from './character-detail.vm';
import * as am from './api/character-detail.api.model';

export const mapCharacterDetailToVm = (
	characterDetail: am.CharacterDetailApiModel
): vm.CharacterDetailViewModel => ({
	id: characterDetail.id,
	name: characterDetail.name,
	image: characterDetail.image,
	gender: characterDetail.gender,
	species: characterDetail.species,
	status: characterDetail.status,
});
