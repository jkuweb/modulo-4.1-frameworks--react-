export interface CharacterViewModel {
	id: number;
	name: string;
	image: string;
}

export const createEmptyCharacterCollection = (): CharacterViewModel[] => [
	{
		id: 0,
		name: '',
		image: '',
	},
];
