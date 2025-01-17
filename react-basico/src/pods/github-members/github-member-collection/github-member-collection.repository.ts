import { getGithubMemberCollectionAPI } from './api';
import { mapGithubMemberCollectionToVM } from './github-member-collection.mapper';
import { GithubMemberCollectionViewModel } from './github-member-collection.viewModel';

export const getGithubMemberCollection = (
	orgName: string
): Promise<GithubMemberCollectionViewModel[]> => {
	return new Promise(resolve => {
		void getGithubMemberCollectionAPI(orgName).then(result =>
			resolve(mapGithubMemberCollectionToVM(result))
		);
	});
};
