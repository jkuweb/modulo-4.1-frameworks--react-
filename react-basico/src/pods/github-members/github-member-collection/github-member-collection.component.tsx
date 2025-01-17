import React from 'react';
import { routes } from '@/routes';
import { Link as RouterLink } from 'react-router-dom';
import { usePaginationContext } from '@/common/providers';
import { GithubMemberCollectionViewModel } from './github-member-collection.viewModel';
import { SearchFilterComponent } from './components/searchFilter/search-filter.component';
import { TablePaginationComponent } from '@/common/components';
import { Avatar, Link, TableCell, TableRow } from '@mui/material';

interface Props {
	members: GithubMemberCollectionViewModel[];
}

export const GithubMemberCollectionComponent: React.FC<Props> = props => {
	const { members: githubMemberCollection } = props;
	const { rowsPerPage, currentPage } = usePaginationContext();

	return (
		<>
			<SearchFilterComponent />
			<TablePaginationComponent
				dataCollection={githubMemberCollection}
				columnsId={['avatar', 'login', 'id']}
			>
				{githubMemberCollection
					.slice(
						currentPage * rowsPerPage,
						currentPage * rowsPerPage + rowsPerPage
					)
					.map(githubMember => {
						return (
							<TableRow
								hover
								role='checkbox'
								tabIndex={-1}
								key={githubMember.id}
							>
								<>
									<TableCell sx={{ display: 'flex', justifyContent: 'center' }}>
										<Avatar
											src={githubMember.avatarUrl}
											alt='avatar image'
											sx={{
												width: 150,
												height: 150,
												display: 'flex',
												justifyContent: 'center',
											}}
											className='animate__animated animate__fadeIn'
										/>
									</TableCell>
									<TableCell align='center'>
										<Link
											component={RouterLink}
											to={routes.githubDetails(githubMember.login)}
										>
											{githubMember.login}
										</Link>
									</TableCell>
									<TableCell key={githubMember.id} align='center'>
										{githubMember.id}
									</TableCell>
								</>
							</TableRow>
						);
					})}
			</TablePaginationComponent>
		</>
	);
};
