import React from 'react';
import { generatePath, Link as RouterLink } from 'react-router-dom';
import { ROUTES } from '@/routes';
import { usePaginationContext } from '@/common/providers';
import { CharacterDetailViewModel } from './character-detail.vm';
import {
	Box,
	Link,
	Card,
	CardContent,
	CardMedia,
	CircularProgress,
	Typography,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Table,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid2';

interface Props {
	member: CharacterDetailViewModel;
}

export const CharacterDetail: React.FC<Props> = ({ member }) => {
	const { currentPage } = usePaginationContext();

	return (
		<Grid container direction='column' alignItems='center'>
			{member.id !== 0 ? (
				<Card
					sx={{
						width: '20rem',
						maxWidth: 445,
						padding: '2rem',
						display: 'grid',
						placeItems: 'center',
						backgroundColor: '#1f2937',
					}}
					className='animate__animated animate__bounceInLeft'
					key={member.id}
				>
					<CardMedia
						sx={{ width: '100%', height: 240, backgroundSize: 'contain' }}
						image={member.image}
						title={member.name}
					/>
					<CardContent>
						<Typography
							gutterBottom
							variant='h5'
							component='div'
							textAlign='center'
							mt={6}
							color='aliceblue'
							border='2px solid #faebd7'
							padding='1rem 2.5rem'
						>
							{member.name}
						</Typography>
						<Table
							aria-label='simple table'
							sx={{ border: '1px solid' + ' aliceblue' }}
						>
							<TableHead>
								<TableRow>
									<TableCell sx={{ color: '#e7eff6', textAlign: 'center' }}>
										Género
									</TableCell>
									<TableCell sx={{ color: '#e7eff6' }}>Especie</TableCell>
									<TableCell sx={{ color: '#e7eff6' }}>Estatus</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<TableRow
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell sx={{ color: '#e7eff6', textAlign: 'center' }}>
										{member.gender}
									</TableCell>
									<TableCell sx={{ color: '#e7eff6', textAlign: 'center' }}>
										{member.species}
									</TableCell>
									<TableCell sx={{ color: '#e7eff6', textAlign: 'center' }}>
										{member.status}
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			) : (
				<Box sx={{ display: 'flex', height: 489 }}>
					<CircularProgress />
				</Box>
			)}
			<div>
				<Link
					component={RouterLink}
					to={generatePath(ROUTES.CHARACTER_COLLECTION, {
						page: currentPage,
					})}
					sx={{
						position: 'absolute',
						bottom: '30px',
						transform: 'translateX(-50%)',
						display: 'flex',
						alignItems: 'center',
						gap: '.3rem',
						backgroundColor: '#111827',
						padding: '1rem',
						borderRadius: '4px',
						border: '1px solid #111827',
						color: 'aliceblue',
						textDecoration: 'none',
						transition: 'all .2s ease-in-out',
						'&:hover': {
							backgroundColor: 'aliceblue',
							color: '#111827',
							border: '1px solid #111827',
						},
					}}
				>
					<ArrowBackIcon />
					Regresar
				</Link>
			</div>
		</Grid>
	);
};
