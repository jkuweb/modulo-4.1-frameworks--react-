import { getGithubMemberApi } from './api';
import { mapGithubMemberToVM } from './github-member.mapper';
import { GithubMemberViewModel } from './github-member.vm';

export const getGithubMemberRepository = (
	login: string
): Promise<GithubMemberViewModel> => {
	return new Promise(resolve => {
		void getGithubMemberApi(login).then(result =>
			resolve(mapGithubMemberToVM(result))
		);
	});
};
