import React, { useCallback, useContext, useState, createContext } from 'react';
import { githubClient } from '../../services/apiClients';

import { RepositoryContextData, RespositoryState } from './types';

const RepositoryContext = createContext<RepositoryContextData>(
	{} as RepositoryContextData
);

export const RepositoryProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<RespositoryState>({ repositories: [] });

	const getRepositories = useCallback(async () => {
		// const repositories = await githubClient.;

		return [{ name: '' }];
	}, []);

	return (
		<RepositoryContext.Provider value={{ getRepositories }}>
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
