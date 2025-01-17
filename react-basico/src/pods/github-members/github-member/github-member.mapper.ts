import * as vm from './github-member.vm';
import * as am from './api';

export const mapGithubMemberToVM = (
	member: am.GithubMemberApiModel
): vm.GithubMemberViewModel => ({
	id: member.id,
	login: member.login,
	avatarUrl: member.avatar_url,
	name: member.name,
	company: member.company,
});
