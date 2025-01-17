import React from 'react';
import { GithubMemberViewModel } from './github-member.vm';
import { Link as RouterLink, generatePath } from 'react-router-dom';
import { ROUTES } from '@/routes';
import { usePaginationContext } from '@/common/providers';
import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Link,
	CircularProgress,
	Box,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import 'animate.css';

interface Props {
	member: GithubMemberViewModel;
}

export const GithubMember: React.FC<Props> = ({ member }) => {
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
						image={member.avatarUrl}
						title={member.login}
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
							{member.login}
						</Typography>
						{member.company && (
							<Typography
								variant='body2'
								mt={3}
								mb={3}
								textAlign='center'
								color='aliceblue'
							>
								Company : {member.company ? member.company : 'No company name'}
							</Typography>
						)}
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
					to={generatePath(ROUTES.GITHUB_MEMBER_COLLECTION, {
						page: currentPage,
					})}
					sx={{
						position: 'absolute',
						bottom: '70px',
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
