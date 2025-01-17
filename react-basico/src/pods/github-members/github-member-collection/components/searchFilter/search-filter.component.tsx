import React, { FC } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import classes from '@/style.module.scss';
import { useGithubMemberContext } from '@/pods/github-members/github-member-collection/providers';
import { usePaginationContext } from '@/common/providers';

export const SearchFilterComponent: FC = () => {
	const { setOrgName } = useGithubMemberContext();
	const [inputValue, setInputValue] = React.useState('');
	const { setCurrentPage } = usePaginationContext();

	const onFormSubmit = (e: React.FormEvent, inputValue: string) => {
		e.preventDefault();
		setOrgName(inputValue);
		setCurrentPage(0);
	};

	return (
		<section className={classes.appFilter}>
			<Typography
				component='h1'
				textAlign='center'
				color='#222'
				fontSize={26}
				mt={4}
				mb={4}
			>
				Buscar organización
			</Typography>
			<Box sx={{ display: 'grid', gridTemplateColumns: '42rem auto' }}>
				<form
					onSubmit={e => onFormSubmit(e, inputValue)}
					className={classes.appFilterForm}
				>
					<TextField
						id='filter-search'
						label='Organización'
						variant='outlined'
						className={classes.appFilterFormInput}
						onChange={e => setInputValue(e.target.value)}
						required
					/>
					<Button variant='outlined' size='medium' type='submit'>
						<SearchIcon />
						Buscar
					</Button>
				</form>
			</Box>
		</section>
	);
};
