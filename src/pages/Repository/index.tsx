import React, { useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import githubExplorerLogo from '../../assets/images/github-explorer-logo.svg';

import { RepositoryParams } from './types';

import { Header, RepositoryInfo, Issues } from './styles';
import { useRepository } from '../../context/RepositoryContext';

const Repository: React.FC = () => {
	const { params } = useRouteMatch<RepositoryParams>();
	const {
		getRepository,
		currentRepository,
		currentRepositoryIssues,
	} = useRepository();

	useEffect(() => {
		async function loadRepository() {
			await getRepository(params.repository);
		}

		loadRepository();
	}, [getRepository, params.repository]);

	return (
		<>
			<Header>
				<img src={githubExplorerLogo} alt="Github Explorer" />
				<Link to="/">
					<FiChevronLeft size={16} />
					Voltar
				</Link>
			</Header>
			{currentRepository && (
				<>
					<RepositoryInfo>
						<header>
							<img
								src={currentRepository.owner.avatar_url}
								alt={currentRepository.owner.login}
							/>
							<div>
								<strong>{currentRepository.full_name}</strong>
								<p>{currentRepository.description}</p>
							</div>
						</header>
						<ul>
							<li>
								<strong>{currentRepository.stargazers_count}</strong>
								<span>Start</span>
							</li>
							<li>
								<strong>{currentRepository.forks_count}</strong>
								<span>Forks</span>
							</li>
							<li>
								<strong>{currentRepository.open_issues_count}</strong>
								<span>Issues abertas</span>
							</li>
						</ul>
					</RepositoryInfo>
					<Issues>
						{currentRepositoryIssues?.map(issue => (
							<a
								key={issue.id}
								href={issue.html_url}
								target="_blank"
								rel="noreferrer"
							>
								<div>
									<strong>{issue.title}</strong>
									<p>{issue.user.login}</p>
								</div>
								<FiChevronRight size={20} />
							</a>
						))}
					</Issues>
				</>
			)}
		</>
	);
};

export default Repository;
