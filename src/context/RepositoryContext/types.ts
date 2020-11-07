export interface RepositoryContextData {
	getRepositories(): Promise<Respository[]>;
}

export interface RespositoryState {
	repositories: Respository[];
}

interface Respository {
	name: string;
}
