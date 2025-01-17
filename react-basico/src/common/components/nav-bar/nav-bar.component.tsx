import React, { FC, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from '@/routes';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from '@mui/material';

export const NavBarComponent: FC = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component='a'
						href={routes.GITHUB_MEMBER_COLLECTION}
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						REACT
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: 'block', md: 'none' } }}
						>
							<MenuItem key={1} onClick={handleCloseNavMenu}>
								<Typography sx={{ textAlign: 'center' }}>
									<Link
										component={RouterLink}
										to={routes.GITHUB_MEMBER_COLLECTION}
									>
										Github Member
									</Link>
								</Typography>
							</MenuItem>
							<MenuItem key={2} onClick={handleCloseNavMenu}>
								<Typography sx={{ textAlign: 'center' }}>
									<Link component={RouterLink} to={routes.CHARACTER_COLLECTION}>
										Rick y Morty
									</Link>
								</Typography>
							</MenuItem>
						</Menu>
					</Box>
					<Typography
						variant='h5'
						noWrap
						component='a'
						href={routes.GITHUB_MEMBER_COLLECTION}
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						LOGO
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Button
							key={1}
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: 'white', display: 'block' }}
							href={routes.GITHUB_MEMBER_COLLECTION}
						>
							github-member
						</Button>
						<Button
							key={2}
							onClick={handleCloseNavMenu}
							sx={{ my: 2, color: 'white', display: 'block' }}
							href={routes.CHARACTER_COLLECTION}
						>
							Rick y Morty
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
