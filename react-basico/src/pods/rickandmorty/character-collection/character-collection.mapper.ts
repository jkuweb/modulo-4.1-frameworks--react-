import * as am from './api';
import * as vm from './characters-collection.vm';

const mapCharacterToVm = (
	character: am.CharacterMemberApiModel
): vm.CharacterViewModel => ({
	id: character.id,
	name: character.name,
	image: character.image,
});

export const mapCharacterCollectionToVm = (
	characterCollectionApi: am.CharacterMemberApiModel[]
): vm.CharacterViewModel[] =>
	 characterCollectionApi ? characterCollectionApi.map(character => mapCharacterToVm(character)) : [];
