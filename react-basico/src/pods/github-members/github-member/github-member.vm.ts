export interface GithubMemberViewModel {
	id: number;
	login: string;
	avatarUrl: string;
	name: string;
	company: string;
}

export const createInitialGithubMemberValue = (): GithubMemberViewModel => ({
	id: 0,
	login: '',
	avatarUrl: '',
	name: '',
	company: '',
});
