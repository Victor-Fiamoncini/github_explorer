import React, { FormEvent, useCallback, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import githubExplorerLogo from '../../assets/images/github-explorer-logo.svg';
import { useRepository } from '../../context/RepositoryContext';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
	const [newRepository, setNewRepository] = useState('');

	const { repositories, getRepositories } = useRepository();

	const handleNewRepositorySubmit = useCallback(
		async (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();

			await getRepositories(newRepository);
		},
		[getRepositories, newRepository]
	);

	return (
		<>
			<img src={githubExplorerLogo} alt="Github Explorer" />
			<Title>Explore repositórios no Github.</Title>
			<Form onSubmit={handleNewRepositorySubmit}>
				<input
					type="text"
					placeholder="Digite o nome do repositório"
					value={newRepository}
					onChange={event => setNewRepository(event.target.value)}
				/>
				<button type="submit">Pesquisar</button>
			</Form>
			<Repositories>
				{repositories.map(repository => (
					<a key={repository.full_name} href="">
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>
						<div>
							<strong>{repository.full_name}</strong>
							<p>{repository.description}</p>
						</div>
						<FiChevronRight size={20} />
					</a>
				))}
			</Repositories>
		</>
	);
};

export default Dashboard;
