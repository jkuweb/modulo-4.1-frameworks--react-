import { ENV_VARIABLES } from '@/core/env';
import { GithubMemberEntityAPIModel } from './github-member-collection.api-model';

export const getGithubMemberCollectionAPI = async (
	orgName: string
): Promise<GithubMemberEntityAPIModel[]> => {
	return await fetch(
		`${ENV_VARIABLES.GITHUB_API_BASE_URL}/orgs/${orgName}/members`
	).then(response => response.json());
};
