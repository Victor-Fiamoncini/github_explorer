import React, { useCallback, useContext, useState, createContext } from 'react';
import { githubClient } from '../../services/apiClients';

import { RepositoryContextData, RespositoryState } from './types';

const RepositoryContext = createContext<RepositoryContextData>(
	{} as RepositoryContextData
);

export const RepositoryProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<RespositoryState>({ repositories: [] });

	const getRepositories = useCallback(
		async (repositoryName: string) => {
			const repositories = await githubClient.get(`repos/${repositoryName}`);

			setData({
				...data,
				repositories: [...data.repositories, repositories.data],
			});
		},
		[data]
	);

	return (
		<RepositoryContext.Provider
			value={{ repositories: data.repositories, getRepositories }}
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
