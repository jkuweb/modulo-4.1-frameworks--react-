import React from 'react';
import { GithubMemberContainer } from '@/pods/github-members/github-member';
import { AppLayout, MemberLayout } from '@/layouts';

export const GithubMemberScene: React.FC = () => {
	return (
		<AppLayout>
			<MemberLayout>
				<GithubMemberContainer />
			</MemberLayout>
		</AppLayout>
	);
};
