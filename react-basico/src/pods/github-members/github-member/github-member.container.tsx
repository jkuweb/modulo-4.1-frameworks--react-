import React from 'react';
import { useParams } from 'react-router-dom';
import {
	createInitialGithubMemberValue,
	GithubMemberViewModel,
} from './github-member.vm';
import { GithubMember } from './github-member.component';
import { useGithubMemberContext } from './providers';

export const GithubMemberContainer: React.FC = () => {
	const { getGithubMember } = useGithubMemberContext();
	const [githubMember, setGithubMember] = React.useState<GithubMemberViewModel>(
		createInitialGithubMemberValue()
	);
	const { login } = useParams();

	React.useEffect(() => {
		if (login) {
			getGithubMember(login).then(setGithubMember);
		}
	}, [login]);

	return <GithubMember member={githubMember} />;
};
