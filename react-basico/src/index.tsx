import { createRoot } from 'react-dom/client';
import { App } from './app';
import { CharacterProvider } from '@/pods/rickandmorty/character-collection/providers';
import { GithubMemberProvider } from '@/pods/github-members/github-member/providers/github-member.provider';
import { GithubCollectionProvider } from '@/pods/github-members/github-member-collection/providers';
import { CharacterDetailProvider } from './pods/rickandmorty/character-member/providers/character-detail.provider';
import { PaginationProvider } from '@/common/providers';
import './style.module.scss';

const rootElement = document.getElementById('root');
if (rootElement) {
	const root = createRoot(rootElement);
	root.render(
		<PaginationProvider>
			<GithubCollectionProvider>
				<CharacterDetailProvider>
					<CharacterProvider>
						<GithubMemberProvider>
							<App />
						</GithubMemberProvider>
					</CharacterProvider>
				</CharacterDetailProvider>
			</GithubCollectionProvider>
		</PaginationProvider>
	);
}
