import React from 'react';
import { GithubMemberCollectionComponent } from './github-member-collection.component';
import { useGithubMemberContext } from './providers';

export const GithubMemberCollectionContainer: React.FC = () => {
	const { githubMemberCollection } = useGithubMemberContext();

	return (
		<>
			<GithubMemberCollectionComponent members={githubMemberCollection} />
		</>
	);
};
