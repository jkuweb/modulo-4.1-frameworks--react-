import { generatePath } from 'react-router-dom';

export const ROUTES = {
	// GITHUB_MEMBER_COLLECTION_PAGINATION: '/github-members/pagina/:page',
	HOME: '/',
	GITHUB_MEMBER_COLLECTION: '/github-members',
	GITHUB_MEMBER_DETAIL: '/github-member/:login',
	// CHARACTER_COLLECTION_PAGINATION: '/personajes/pagina/:page',
	CHARACTER_COLLECTION: '/personajes',
	CHARACTER_MEMBER_DETAIL: '/personaje/:id',
};

interface SwitchRoutes {
	HOME: string;
	GITHUB_MEMBER_COLLECTION: string;
	GITHUB_MEMBER_DETAIL: string;
	CHARACTER_COLLECTION: string;
	CHARACTER_MEMBER_DETAIL: string;
}

export const switchRoutes: SwitchRoutes = {
	HOME: '/',
	GITHUB_MEMBER_COLLECTION: '/github-members',
	GITHUB_MEMBER_DETAIL: '/github-member/:login',
	CHARACTER_COLLECTION: '/personajes',
	CHARACTER_MEMBER_DETAIL: '/personaje/:id',
};

interface Routes
	extends Omit<
		SwitchRoutes,
		'GITHUB_MEMBER_DETAIL' | 'CHARACTER_MEMBER_DETAIL'
	> {
	githubDetails: (login: string) => string;
	characterDetail: (id: number) => string;
}

export const routes: Routes = {
	...switchRoutes,
	githubDetails: login =>
		generatePath(switchRoutes.GITHUB_MEMBER_DETAIL, { login }),
	characterDetail: id =>
		generatePath(switchRoutes.CHARACTER_MEMBER_DETAIL, { id }),
};
