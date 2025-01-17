import React, { PropsWithChildren } from 'react';
import { GithubMemberViewModel } from '../github-member.vm';
import { getGithubMemberRepository } from '../github-member.repository';

interface GithubMemberContextModel {
	getGithubMember: (login: string) => Promise<GithubMemberViewModel>;
}

export const GithubMemberContext =
	React.createContext<GithubMemberContextModel>(null);

export const GithubMemberProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const [githubMembers, setGithubMembers] = React.useState({});

	const fetchGithubMember = async (login: string) => {
		const member = await getGithubMemberRepository(login);
		setGithubMembers({
			...githubMembers,
			[login]: member,
		});

		return member;
	};

	const getGithubMember = (login: string) =>
		githubMembers[login]
			? Promise.resolve(githubMembers[login])
			: fetchGithubMember(login);

	return (
		<GithubMemberContext.Provider value={{ getGithubMember }}>
			{children}
		</GithubMemberContext.Provider>
	);
};

export const useGithubMemberContext = (): GithubMemberContextModel =>
	React.useContext(GithubMemberContext);
