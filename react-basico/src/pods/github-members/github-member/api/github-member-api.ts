import { ENV_VARIABLES } from '@/core/env';
import { GithubMemberApiModel } from './github-member.api-model';

export const getGithubMemberApi = async (
	login: string
): Promise<GithubMemberApiModel> => {
	const response = await fetch(
		`${ENV_VARIABLES.GITHUB_API_BASE_URL}/users/${login}`
	).then(response => response.json());

	return response;
};
