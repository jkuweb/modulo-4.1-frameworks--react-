import React from 'react';
import { AppLayout, TableLayout } from '@/layouts';
import { GithubMemberCollectionContainer } from '@/pods/github-members/github-member-collection';

export const GithubMemberCollectionScene: React.FC = () => {
	return (
		<AppLayout>
			<TableLayout>
				<GithubMemberCollectionContainer />
			</TableLayout>
		</AppLayout>
	);
};
