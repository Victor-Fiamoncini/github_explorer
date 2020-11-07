export interface Respository {
	full_name: string;
	description: string;
	owner: {
		login: string;
		avatar_url: string;
	};
}

export interface RespositoryState {
	repositories: Respository[];
}

export interface RepositoryContextData {
	repositories: Respository[];
	getRepositories(repositoryName: string): Promise<void>;
}
