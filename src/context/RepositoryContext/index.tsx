import React, {
	useCallback,
	useContext,
	useEffect,
	useState,
	createContext,
} from 'react';
import { githubClient } from '../../services/apiClients';

import { RepositoryContextData, RespositoryState } from './types';

const RepositoryContext = createContext<RepositoryContextData>(
	{} as RepositoryContextData
);

export const RepositoryProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<RespositoryState>(() => {
		const initialState: RespositoryState = {
			repositories: [],
		};

		const storagedRepositories = localStorage.getItem(
			'@GithubExplorer:repositories'
		);

		if (storagedRepositories) {
			initialState.repositories = JSON.parse(storagedRepositories);
		}

		return initialState;
	});
	const { repositories } = data;

	const getRepositories = useCallback(
		async (repositoryName: string) => {
			const response = await githubClient.get(`repos/${repositoryName}`);

			setData({
				repositories: [...repositories, response.data],
			});
		},
		[repositories]
	);

	useEffect(() => {
		localStorage.setItem(
			'@GithubExplorer:repositories',
			JSON.stringify(repositories)
		);
	}, [repositories]);

	return (
		<RepositoryContext.Provider value={{ repositories, getRepositories }}>
			{children}
		</RepositoryContext.Provider>
	);
};

export function useRepository(): RepositoryContextData {
	const context = useContext(RepositoryContext);

	if (!context) {
		throw new Error('useRepository must be used within an RepositoryProvider');
	}

	return context;
}
