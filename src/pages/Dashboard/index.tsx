import React, { FormEvent, useCallback, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import githubExplorerLogo from '../../assets/images/github-explorer-logo.svg';
import { useRepository } from '../../context/RepositoryContext';

import { Title, Form, Repositories, Error } from './styles';

const Dashboard: React.FC = () => {
	const [newRepository, setNewRepository] = useState('');
	const [inputError, setInputError] = useState('');

	const { repositories, getRepositories } = useRepository();

	const handleNewRepositorySubmit = useCallback(
		async (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();

			if (!newRepository) {
				setInputError('Digite o autor/nome do repositório');

				return;
			}

			try {
				await getRepositories(newRepository);

				setNewRepository('');
				setInputError('');
			} catch {
				setInputError('Erro ao buscar o repositório');
			}
		},
		[getRepositories, newRepository]
	);

	return (
		<>
			<img src={githubExplorerLogo} alt="Github Explorer" />
			<Title>Explore repositórios no Github.</Title>
			<Form hasError={!!inputError} onSubmit={handleNewRepositorySubmit}>
				<input
					type="text"
					placeholder="Digite o nome do repositório"
					value={newRepository}
					onChange={event => setNewRepository(event.target.value)}
				/>
				<button type="submit">Pesquisar</button>
			</Form>
			{inputError && <Error>{inputError}</Error>}
			<Repositories>
				{repositories.map(repository => (
					<Link
						key={repository.full_name}
						to={`/repositories/${repository.full_name}`}
					>
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>
						<div>
							<strong>{repository.full_name}</strong>
							<p>{repository.description}</p>
						</div>
						<FiChevronRight size={20} />
					</Link>
				))}
			</Repositories>
		</>
	);
};

export default Dashboard;
