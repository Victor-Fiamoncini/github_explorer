import React from 'react';

import githubExplorerLogo from '../../assets/images/github-explorer-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
	return (
		<>
			<img src={githubExplorerLogo} alt="Github Explorer" />
			<Title>Explore repositórios no Github.</Title>
			<Form>
				<input type="text" placeholder="Digite o nome do repositório" />
				<button type="submit">Pesquisar</button>
			</Form>
			<Repositories>
				<a href="">
					<img
						src="https://avatars0.githubusercontent.com/u/43005250?s=460&u=b36b009d58ba109e2348e60ef83771dd34e91ba2&v=4"
						alt="Avatar"
					/>
					<div>
						<strong>Meu repooooooo</strong>
						<p>
							qqoenfief wieofnmwiefmwef wefmweifmweof w wefmwiefmwef wefwef
							eimfwef
						</p>
					</div>
				</a>
			</Repositories>
		</>
	);
};

export default Dashboard;
