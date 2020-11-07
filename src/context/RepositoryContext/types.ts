export interface Respository {
	full_name: string;
	description: string;
	stargazers_count: number;
	forks_count: number;
	open_issues_count: number;
	owner: {
		login: string;
		avatar_url: string;
	};
}

export interface Issue {
	id: number;
	title: string;
	html_url: string;
	user: {
		login: string;
	};
}

export interface RespositoryState {
	repositories: Respository[];
	currentRepository?: Respository;
	currentRepositoryIssues?: Issue[];
}

export interface RepositoryContextData {
	repositories: Respository[];
	currentRepository?: Respository;
	currentRepositoryIssues?: Issue[];
	getRepositories(repositoryAuthorName: string): Promise<void>;
	getRepository(repositoryName: string): Promise<void>;
}
