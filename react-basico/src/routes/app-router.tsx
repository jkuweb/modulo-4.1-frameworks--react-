import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';
import {
	CharacterCollectionScene,
	CharacterDetailScene,
	GithubMemberCollectionScene,
	GithubMemberScene,
} from '@/scenes';

export const AppRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.HOME} element={<GithubMemberCollectionScene />} />
				<Route
					path={ROUTES.GITHUB_MEMBER_COLLECTION}
					element={<GithubMemberCollectionScene />}
				/>
				<Route
					path={ROUTES.GITHUB_MEMBER_DETAIL}
					element={<GithubMemberScene />}
				/>

				<Route
					path={ROUTES.CHARACTER_COLLECTION}
					element={<CharacterCollectionScene />}
				/>
				<Route
					path={ROUTES.CHARACTER_MEMBER_DETAIL}
					element={<CharacterDetailScene />}
				/>
				<Route path='/*' element={<Navigate to='/' />} />
			</Routes>
		</BrowserRouter>
	);
};
