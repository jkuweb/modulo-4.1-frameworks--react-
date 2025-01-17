import * as api from './api';
import * as vm from './github-member-collection.viewModel';

const mapGithubMemberToVM = (
	member: api.GithubMemberEntityAPIModel
): vm.GithubMemberCollectionViewModel => ({
	id: member.id,
	login: member.login,
	avatarUrl: member.avatar_url,
});

export const mapGithubMemberCollectionToVM = (
	members: api.GithubMemberEntityAPIModel[]
): vm.GithubMemberCollectionViewModel[] =>
	members.map(member => mapGithubMemberToVM(member));
