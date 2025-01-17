export interface CharacterDetailViewModel {
	id: number;
	name: string;
	species: string;
	image: string;
	gender: string;
	status: string;
}

export const createEmptyCharacterDetail = (): CharacterDetailViewModel => ({
	id: 0,
	name: '',
	species: '',
	image: '',
	gender: '',
	status: '',
});
