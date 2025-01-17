import React from 'react';
import { useCharacterContext } from '../../providers';
import { useDebounce } from 'use-debounce';
import { Box, Button, TextField, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import classes from '@/style.module.scss';

export const SearchFilterComponent: React.FC = () => {
	const { setFilter } = useCharacterContext();
	const [inputValue, setInputValue] = React.useState('');
	const [debounceValue] = useDebounce(inputValue, 1000);

	React.useEffect(() => {
		setFilter(debounceValue.toLowerCase());
	}, [debounceValue]);

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
				Buscar personaje
			</Typography>
			<Box sx={{ display: 'grid', gridTemplateColumns: '42rem auto' }}>
				<form
					onSubmit={e => e.preventDefault()}
					className={classes.appFilterForm}
				>
					<TextField
						id='filter-search'
						label='nombre del personaje'
						variant='outlined'
						className={classes.appFilterFormInput}
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						required
					/>
					<Button
						variant='outlined'
						size='medium'
						type='submit'
						onClick={() => {
							setInputValue('');
						}}
					>
						Borrar
						<ClearIcon
							sx={{ marginLeft: '.2rem', position: 'relative', top: '-2px' }}
						/>
					</Button>
				</form>
			</Box>
		</section>
	);
};
