import React, { PropsWithChildren } from 'react';
import {
	createEmptyMemberCollection,
	GithubMemberCollectionViewModel,
} from '../github-member-collection.viewModel';
import { getGithubMemberCollection } from '../github-member-collection.repository';

interface GithubCollectionContextModel {
	githubMemberCollection: GithubMemberCollectionViewModel[];
	setOrgName: (value: string) => void;
	orgName: string;
}

export const GithubCollectionContext =
	React.createContext<GithubCollectionContextModel>({
		githubMemberCollection: [],
		orgName: '',
		setOrgName: () => {},
	});

export const GithubCollectionProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const [githubMemberCollection, setGithubMemberCollection] = React.useState<
		GithubMemberCollectionViewModel[]
	>(createEmptyMemberCollection());
	const [orgName, setOrgName] = React.useState('lemoncode');

	React.useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		getGithubMemberCollection(orgName).then(setGithubMemberCollection);
	}, [orgName]);

	return (
		<GithubCollectionContext.Provider
			value={{
				githubMemberCollection,
				setOrgName,
				orgName,
			}}
		>
			{children}
		</GithubCollectionContext.Provider>
	);
};

export const useGithubMemberContext = () => {
	return React.useContext(GithubCollectionContext);
};
