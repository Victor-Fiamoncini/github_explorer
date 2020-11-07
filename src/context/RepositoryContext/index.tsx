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
			currentRepository: undefined,
			currentRepositoryIssues: [],
		};

		const storagedRepositories = localStorage.getItem(
			'@GithubExplorer:repositories'
		);

		if (storagedRepositories) {
			initialState.repositories = JSON.parse(storagedRepositories);
		}

		return initialState;
	});

	const { repositories, currentRepository, currentRepositoryIssues } = data;

	const getRepositories = useCallback(
		async (repositoryAuthorName: string) => {
			const response = await githubClient.get(`repos/${repositoryAuthorName}`);

			setData({
				...data,
				repositories: [...repositories, response.data],
			});
		},
		[data, repositories]
	);

	const getRepository = useCallback(
		async (repositoryName: string) => {
			const [repositoryResponse, issuesResponse] = await Promise.all([
				githubClient.get(`repos/${repositoryName}`),
				githubClient.get(`repos/${repositoryName}/issues`),
			]);

			setData({
				...data,
				currentRepository: repositoryResponse.data,
				currentRepositoryIssues: issuesResponse.data,
			});
		},
		[data]
	);

	useEffect(() => {
		localStorage.setItem(
			'@GithubExplorer:repositories',
			JSON.stringify(repositories)
		);
	}, [repositories]);

	return (
		<RepositoryContext.Provider
			value={{
				repositories,
				currentRepository,
				currentRepositoryIssues,
				getRepositories,
				getRepository,
			}}
		>
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
