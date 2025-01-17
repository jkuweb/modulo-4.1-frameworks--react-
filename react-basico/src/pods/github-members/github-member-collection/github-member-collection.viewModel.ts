export interface GithubMemberCollectionViewModel {
	id: number;
	login: string;
	avatarUrl: string;
}

export const createEmptyMemberCollection =
	(): GithubMemberCollectionViewModel[] => [
		{
			id: 0,
			login: '',
			avatarUrl: '',
		},
	];
